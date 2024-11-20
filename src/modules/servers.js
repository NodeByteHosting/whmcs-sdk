"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servers = void 0;
class Servers {
    /**
     * Creates a new Servers object
     * @param {WhmcsClient} whmcsHttpClient
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get health status.
     * https://developers.whmcs.com/api-reference/gethealthstatus/
     * @param {GetHealthStatusParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getHealthStatus(parameters, callback) {
        return this.client.callApi('GetHealthStatus', parameters, callback);
    }
    /**
     * Get servers.
     * https://developers.whmcs.com/api-reference/getservers/
     * @param {GetServersParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getServers(parameters, callback) {
        return this.client.callApi('GetServers', parameters, callback);
    }
}
exports.Servers = Servers;
