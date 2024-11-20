import request, { CoreOptions, UriOptions } from 'request';
import { WHMCSOptions, ModemOptions } from '../typings/index';

type Callback = (error: any, response: any) => void;

export class whmcsApi {
  private opts: WHMCSOptions;

  constructor(opts: WHMCSOptions) {
    ['host', 'identifier', 'secret'].forEach(name => {
      if (!opts.hasOwnProperty(name)) {
        throw new Error(`[whmcs-sdk]: missing required option ${name}`);
      }
    });

    this.opts = {
      endpoint: 'includes/api.php',
      ...opts
    };
  }

  /**
   * Sends a request to the WHMCS API
   * @param opts Options for the request
   * @param cb Callback function
   * @returns Promise<any>
   */
  private modem(opts: ModemOptions, cb?: Callback): Promise<any> {
    const options: UriOptions & CoreOptions = {
      uri: `https://${this.opts.host}/${this.opts.endpoint}`,
      method: opts.method || 'POST',
      qs: {
        identifier: this.opts.identifier,
        secret: this.opts.secret,
        responseType: opts.responsetype || 'json',
        ...opts
      },
      json: true
    };

    return new Promise((resolve, reject) => {
      request(options, (e, r) => {
        if (e) {
          if (cb) cb(e, null);
          return reject(e);
        }

        const jsonBody = r.body;

        if (jsonBody.error) {
          if (cb) cb(jsonBody.error, null);
          return reject(jsonBody.error);
        }

        if (!opts.raw) {
          const keys = Object.keys(jsonBody);
          const secKeys = Object.keys(jsonBody[keys[keys.length - 1]]);

          if (secKeys.length === 1) {
            const result = jsonBody[keys[keys.length - 1]][secKeys[0]];
            if (cb) cb(null, result);
            return resolve(result);
          }
        }

        if (cb) cb(null, jsonBody);
        return resolve(jsonBody);
      });
    });
  }

  /**
   * Calls an action on the WHMCS API
   * @param action The action to call
   * @param opts Options for the request
   * @param cb Callback function
   * @returns Promise<any>
   */
  call(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> {
    if (typeof opts === 'function') {
      cb = opts;
      opts = {};
    }

    return this.modem({ action, ...opts }, cb);
  }

  /**
   * Calls a Get action on the WHMCS API
   * @param action The action to call
   * @param opts Options for the request
   * @param cb Callback function
   * @returns Promise<any>
   */
  get(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> {
    if (typeof opts === 'function') {
      cb = opts;
      opts = {};
    }

    return this.modem({ action: `Get${action}`, ...opts }, cb);
  }

  /**
   * Calls an Add action on the WHMCS API
   * @param action The action to call
   * @param opts Options for the request
   * @param cb Callback function
   * @returns Promise<any>
   */
  add(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> {
    if (typeof opts === 'function') {
      cb = opts;
      opts = {};
    }

    return this.modem({ action: `Add${action}`, ...opts }, cb);
  }

  /**
   * Calls an Update action on the WHMCS API
   * @param action The action to call
   * @param opts Options for the request
   * @param cb Callback function
   * @returns Promise<any>
   */
  update(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> {
    if (typeof opts === 'function') {
      cb = opts;
      opts = {};
    }

    return this.modem({ action: `Update${action}`, ...opts }, cb);
  }

  /**
   * Calls a Delete action on the WHMCS API
   * @param action The action to call
   * @param opts Options for the request
   * @param cb Callback function
   * @returns Promise<any>
   */
  delete(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> {
    if (typeof opts === 'function') {
      cb = opts;
      opts = {};
    }

    return this.modem({ action: `Delete${action}`, ...opts }, cb);
  }
}