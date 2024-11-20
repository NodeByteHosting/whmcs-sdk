import { WhmcsClient } from "../lib/client";
import { AffiliateActivateParams, GetAffiliatesParams } from "../typings/affiliates";

export class Affiliates {
    private client: WhmcsClient;

    constructor(client: WhmcsClient) {
        this.client = client;
    }

    /**
   * Activate affiliate referrals for a client.
   * https://developers.whmcs.com/api-reference/affiliateactivate/
   * @param {AffiliateActivateParams} parameters Request parameters
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
    affiliateActivate(parameters: AffiliateActivateParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('AffiliateActivate', parameters, callback);
    }

    /**
     * Obtain an array of affiliates
     * https://developers.whmcs.com/api-reference/getaffiliates/
     * @param {GetAffiliatesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAffiliates(parameters: GetAffiliatesParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetAffiliates', parameters, callback);
    }
}