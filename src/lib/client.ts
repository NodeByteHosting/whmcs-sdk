import { utils } from './utils';
import xml2js from 'xml2js';
import axios, { AxiosInstance } from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { Configs, AxiosConfig } from '../typings';
import querystring from 'querystring';

export class WhmcsClient {
  private apiSecret: string | null = null;
  private apiIdentifier: string | null = null;
  private username: string | null = null;
  private password: string | null = null;
  private accessKey: string | null = null;
  private serverUrl: string | null = null;
  private Promise: PromiseConstructor = global.Promise;
  private responseType: string = 'json';
  private userAgent: string | null = null;
  private proxyUrl: string | null = null;
  private axiosInstance: AxiosInstance | null = null;
  private timeout: number = 0;

  constructor(config: Configs = {}) {
    this.username = config.username ?? this.username;
    this.password = config.password ?? this.password;
    this.serverUrl = config.serverUrl ?? this.serverUrl;
    this.timeout = config.timeout ?? this.timeout;
    this.apiIdentifier = config.apiIdentifier ?? this.apiIdentifier;
    this.apiSecret = config.apiSecret ?? this.apiSecret;
    this.accessKey = config.accessKey ?? this.accessKey;
    this.Promise = config.Promise ?? this.Promise;
    this.responseType = config.responseType ?? this.responseType;
    this.userAgent = config.userAgent ?? this.userAgent;
    this.proxyUrl = config.proxyUrl ?? this.proxyUrl;

    if (this.Promise != null && typeof this.Promise.resolve !== 'function') {
      throw new Error('Invalid promise library.');
    }

    const axiosConf: AxiosConfig = {
      baseUrl: this.serverUrl as string,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': '@nodebyte/whmcs-sdk'
      }
    };

    if (this.userAgent != null) {
      axiosConf.headers['User-Agent'] = this.userAgent;
    }

    if (this.proxyUrl != null) {
      axiosConf['httpsAgent'] = new HttpsProxyAgent(this.proxyUrl);
    }

    this.axiosInstance = axios.create(axiosConf);
  }

  /**
   * Executes a WHMCS' API action with given parameters.
   * WHMCS' official action list available here: https://developers.whmcs.com/api/api-index/
   * @param action Command name
   * @param parameters Request parameters (JSON Object)
   * @param callback Optional callback. If not set the method returns a Promise
   */
  callApi(action: string, parameters: Record<string, any>, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
    const bodyParams = {
      action: action,
      username: this.username,
      password: this.password,
      identifier: this.apiIdentifier,
      secret: this.apiSecret,
      accesskey: this.accessKey,
      responsetype: this.responseType
    };

    if (typeof parameters === 'function' && callback == null) {
      callback = parameters as any;
    } else {
      utils.extend(bodyParams, parameters);
    }

    const startRequest = (callback: (err: Error | null, data?: any) => void) => {
      this.post(bodyParams, (err, data, httpStatusCode) => {
        if (err) {
          callback(err);
        } else if (data.result && data.result === 'error' || data.status && data.status === 'error') {
          const whmcsError = new Error(`WHMCS Error (${httpStatusCode}): ${data.message}`);
          callback(whmcsError);
        } else {
          callback(null, data);
        }
      });
    };

    if (callback === undefined) {
      return new this.Promise((resolve, reject) => {
        startRequest((err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    } else {
      startRequest(callback);
    }
  }

  private post(bodyParams: Record<string, any>, callback: (err: Error | null, data?: any, httpStatusCode?: number) => void): void {
    const qs = querystring.stringify(bodyParams);
    this.axiosInstance!.post('/includes/api.php', qs)
      .then(resp => {
        if (resp.headers['content-type'].indexOf('application/xml') > -1) {
          xml2js.parseString(resp.data, {
            explicitArray: false
          }, (err, parsedXml) => {
            if (err) {
              callback(new Error('Error parsing xml'));
            } else if (!parsedXml) {
              callback(new Error('Empty HTTP response'));
            } else if (!parsedXml.whmcsapi || !parsedXml.whmcsapi.result) {
              callback(new Error('Unexpected XML response'));
            } else {
              callback(null, parsedXml.whmcsapi, resp.status);
            }
          });
        } else {
          callback(null, resp.data, resp.status);
        }
      }).catch(err => {
        callback(err);
      });
  }
}

