import { WhmcsClient } from '../lib/client';
import { GetHealthStatusParams, GetServersParams } from '../typings/servers';
export declare class Servers {
    private client;
    /**
     * Creates a new Servers object
     * @param {WhmcsClient} whmcsHttpClient
     */
    constructor(client: WhmcsClient);
    /**
     * Get health status.
     * https://developers.whmcs.com/api-reference/gethealthstatus/
     * @param {GetHealthStatusParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getHealthStatus(parameters: GetHealthStatusParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Get servers.
     * https://developers.whmcs.com/api-reference/getservers/
     * @param {GetServersParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getServers(parameters: GetServersParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
}
