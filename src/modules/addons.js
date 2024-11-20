"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addons = void 0;
class Addons {
    constructor(client) {
        this.client = client;
    }
    /**
   * Updates a Client Addon.
   * https://developers.whmcs.com/api-reference/updateclientaddon/
   * @param {UpdateClientAddonParams} parameters Request parameters
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
    updateClientAddon(parameters, callback) {
        return this.client.callApi('UpdateClientAddon', parameters, callback);
    }
}
exports.Addons = Addons;
