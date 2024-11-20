"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliates = void 0;
class Affiliates {
    constructor(client) {
        this.client = client;
    }
    /**
   * Activate affiliate referrals for a client.
   * https://developers.whmcs.com/api-reference/affiliateactivate/
   * @param {AffiliateActivateParams} parameters Request parameters
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
    affiliateActivate(parameters, callback) {
        return this.client.callApi('AffiliateActivate', parameters, callback);
    }
    /**
     * Obtain an array of affiliates
     * https://developers.whmcs.com/api-reference/getaffiliates/
     * @param {GetAffiliatesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAffiliates(parameters, callback) {
        return this.client.callApi('GetAffiliates', parameters, callback);
    }
}
exports.Affiliates = Affiliates;
