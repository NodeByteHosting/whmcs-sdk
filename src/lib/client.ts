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
   * @returns Promise or void
   */
  private modem(opts: ModemOptions, cb?: Callback): Promise<any> | void {
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

    if (cb) {
      request(options, cb);
      return;
    }

    return new Promise((resolve, reject) =>
      request(options, (e, r) => {
        if (e) return reject(e);

        const jsonBody = r.body;

        if (jsonBody.error) return reject(jsonBody.error);

        if (!opts.raw) {
          const keys = Object.keys(jsonBody);
          const secKeys = Object.keys(jsonBody[keys[keys.length - 1]]);

          if (secKeys.length === 1) {
            return resolve(jsonBody[keys[keys.length - 1]][secKeys[0]]);
          }
        }

        return resolve(jsonBody);
      })
    );
  }

  /**
   * Calls an action on the WHMCS API
   * @param action The action to call
   * @param opts Options for the request
   * @param cb Callback function
   * @returns Promise or void
   */
  call(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> | void {
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
   * @returns Promise or void
   */
  get(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> | void {
    if (typeof opts === 'function') {
      cb = opts;
      opts = {}
    }

    return this.modem({ action: `Get${action}`, ...opts }, cb);
  }

  /**
   * Calls an Add action on the WHMCS API
   * @param action The action to call
   * @param opts Options for the request
   * @param cb Callback function
   * @returns Promise or void
   */
  add(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> | void {
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
   * @returns Promise or void
   */
  update(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> | void {
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
   * @returns Promise or void
   */
  delete(action: string, opts: ModemOptions = {}, cb?: Callback): Promise<any> | void {
    if (typeof opts === 'function') {
      cb = opts;
      opts = {};
    }

    return this.modem({ action: `Delete${action}`, ...opts }, cb);
  }
}