import { WhmcsClient } from "../lib/client";
import { UpdateClientAddonParams } from "../typings/addons";
export declare class Addons {
    client: WhmcsClient;
    constructor(client: WhmcsClient);
    /**
   * Updates a Client Addon.
   * https://developers.whmcs.com/api-reference/updateclientaddon/
   * @param {UpdateClientAddonParams} parameters Request parameters
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
    updateClientAddon(parameters: UpdateClientAddonParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
}
