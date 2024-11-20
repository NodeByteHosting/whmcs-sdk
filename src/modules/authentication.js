"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
class Authentication {
    /**
     * Creates a new Authentication object
     * @param {client} WhmcsClient The WHMCS client instance
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Create an OAuth Credential
     * https://developers.whmcs.com/api-reference/createoauthcredential/
     * @param {CreateOAuthCredentialParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    createOAuthCredential(parameters, callback) {
        return this.client.callApi('CreateOAuthCredential', parameters, callback);
    }
    /**
     * Create a single use, client or user single sign-on access token.
     * https://developers.whmcs.com/api-reference/createssotoken/
     * @param {CreateSsoTokenParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    createSsoToken(parameters, callback) {
        return this.client.callApi('CreateSsoToken', parameters, callback);
    }
    /**
     * Removes OAuth Credential record. This action cannot be undone.
     * https://developers.whmcs.com/api-reference/deleteoauthcredential/
     * @param {DeleteOAuthCredentialParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    deleteOAuthCredential(parameters, callback) {
        return this.client.callApi('DeleteOAuthCredential', parameters, callback);
    }
    /**
     * List OAuth Credentials matching passed criteria.
     * https://developers.whmcs.com/api-reference/listoauthcredentials/
     * @param {ListOAuthCredentialsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    listOAuthCredentials(parameters, callback) {
        return this.client.callApi('ListOAuthCredentials', parameters, callback);
    }
    /**
     * Updates a given OAuth API Client Credential.
     * https://developers.whmcs.com/api-reference/updateoauthcredential/
     * @param {UpdateOAuthCredentialParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateOAuthCredential(parameters, callback) {
        return this.client.callApi('UpdateOAuthCredential', parameters, callback);
    }
    /**
     * Validate user login credentials.
     * https://developers.whmcs.com/api-reference/validatelogin/
     * @param {ValidateLoginParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    validateLogin(parameters, callback) {
        return this.client.callApi('ValidateLogin', parameters, callback);
    }
}
exports.Authentication = Authentication;
