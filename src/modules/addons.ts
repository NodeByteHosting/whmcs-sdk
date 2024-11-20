import { WhmcsClient } from "../lib/client";
import { UpdateClientAddonParams } from "../typings/addons";

export class Addons {

    public client: WhmcsClient;

    constructor(client: WhmcsClient) {
        this.client = client;
    }


    /**
   * Updates a Client Addon.
   * https://developers.whmcs.com/api-reference/updateclientaddon/
   * @param {UpdateClientAddonParams} parameters Request parameters
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
    updateClientAddon(parameters: UpdateClientAddonParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('UpdateClientAddon', parameters, callback);
    }
}