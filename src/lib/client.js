"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhmcsClient = void 0;
const utils_1 = require("./utils");
const xml2js_1 = __importDefault(require("xml2js"));
const axios_1 = __importDefault(require("axios"));
const https_proxy_agent_1 = require("https-proxy-agent");
const querystring_1 = __importDefault(require("querystring"));
class WhmcsClient {
    constructor(config = {}) {
        this.apiSecret = null;
        this.apiIdentifier = null;
        this.username = null;
        this.password = null;
        this.accessKey = null;
        this.serverUrl = null;
        this.Promise = global.Promise;
        this.responseType = 'json';
        this.userAgent = null;
        this.proxyUrl = null;
        this.axiosInstance = null;
        this.timeout = 0;
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
        const axiosConf = {
            baseUrl: this.serverUrl,
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
            axiosConf['httpsAgent'] = new https_proxy_agent_1.HttpsProxyAgent(this.proxyUrl);
        }
        this.axiosInstance = axios_1.default.create(axiosConf);
    }
    /**
     * Executes a WHMCS' API action with given parameters.
     * WHMCS' official action list available here: https://developers.whmcs.com/api/api-index/
     * @param action Command name
     * @param parameters Request parameters (JSON Object)
     * @param callback Optional callback. If not set the method returns a Promise
     */
    callApi(action, parameters, callback) {
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
            callback = parameters;
        }
        else {
            utils_1.utils.extend(bodyParams, parameters);
        }
        const startRequest = (callback) => {
            this.post(bodyParams, (err, data, httpStatusCode) => {
                if (err) {
                    callback(err);
                }
                else if (data.result && data.result === 'error' || data.status && data.status === 'error') {
                    const whmcsError = new Error(`WHMCS Error (${httpStatusCode}): ${data.message}`);
                    callback(whmcsError);
                }
                else {
                    callback(null, data);
                }
            });
        };
        if (callback === undefined) {
            return new this.Promise((resolve, reject) => {
                startRequest((err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        }
        else {
            startRequest(callback);
        }
    }
    post(bodyParams, callback) {
        const qs = querystring_1.default.stringify(bodyParams);
        this.axiosInstance.post('/includes/api.php', qs)
            .then(resp => {
            if (resp.headers['content-type'].indexOf('application/xml') > -1) {
                xml2js_1.default.parseString(resp.data, {
                    explicitArray: false
                }, (err, parsedXml) => {
                    if (err) {
                        callback(new Error('Error parsing xml'));
                    }
                    else if (!parsedXml) {
                        callback(new Error('Empty HTTP response'));
                    }
                    else if (!parsedXml.whmcsapi || !parsedXml.whmcsapi.result) {
                        callback(new Error('Unexpected XML response'));
                    }
                    else {
                        callback(null, parsedXml.whmcsapi, resp.status);
                    }
                });
            }
            else {
                callback(null, resp.data, resp.status);
            }
        }).catch(err => {
            callback(err);
        });
    }
}
exports.WhmcsClient = WhmcsClient;
