"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    /**
     * Creates a new Client object
     * @param {client} whmcsHttpClient
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Adds a client.
     * https://developers.whmcs.com/api-reference/addclient/
     * @param {AddClientParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    addClient(parameters, callback) {
        return this.client.callApi('AddClient', parameters, callback);
    }
    /**
     * Adds a contact to a client account.
     * https://developers.whmcs.com/api-reference/addcontact/
     * @param {AddContactParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    addContact(parameters, callback) {
        return this.client.callApi('AddContact', parameters, callback);
    }
    /**
     * Close a Client.
     * https://developers.whmcs.com/api-reference/closeclient/
     * @param {CloseClientParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    closeClient(parameters, callback) {
        return this.client.callApi('CloseClient', parameters, callback);
    }
    /**
     * Deletes a client.
     * https://developers.whmcs.com/api-reference/deleteclient/
     * @param {DeleteClientParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    deleteClient(parameters, callback) {
        return this.client.callApi('DeleteClient', parameters, callback);
    }
    /**
     * Deletes a contact.
     * https://developers.whmcs.com/api-reference/deletecontact/
     * @param {DeleteContactParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    deleteContact(parameters, callback) {
        return this.client.callApi('DeleteContact', parameters, callback);
    }
    /**
     * Obtain an array of cancellation requests.
     * https://developers.whmcs.com/api-reference/getcancelledpackages/
     * @param {GetCancelledPackagesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getCancelledPackages(parameters, callback) {
        return this.client.callApi('GetCancelledPackages', parameters, callback);
    }
    /**
     * Obtain an array of client groups.
     * https://developers.whmcs.com/api-reference/getclientgroups/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientGroups(callback) {
        return this.client.callApi('GetClientGroups', callback);
    }
    /**
     * Obtain the encrypted client password.
     * https://developers.whmcs.com/api-reference/getclientpassword/
     * @param {GetClientPasswordParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientPassword(parameters, callback) {
        return this.client.callApi('GetClientPassword', parameters, callback);
    }
    /**
     * Obtain the Clients that match passed criteria.
     * https://developers.whmcs.com/api-reference/getclients/
     * @param {GetClientsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClients(parameters, callback) {
        return this.client.callApi('GetClients', parameters, callback);
    }
    /**
     * Obtain the Clients Product Addons that match passed criteria.
     * https://developers.whmcs.com/api-reference/getclientsaddons/
     * @param {GetClientsAddonsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientsAddons(parameters, callback) {
        return this.client.callApi('GetClientsAddons', parameters, callback);
    }
    /**
     * Obtain the Clients Details for a specific client.
     * https://developers.whmcs.com/api-reference/getclientsdetails/
     * @param {GetClientsDetailsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientsDetails(parameters, callback) {
        return this.client.callApi('GetClientsDetails', parameters, callback);
    }
    /**
     * Obtain a list of Client Purchased Domains matching the provided criteria.
     * https://developers.whmcs.com/api-reference/getclientsdomains/
     * @param {GetClientsDomainsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientsDomains(parameters, callback) {
        return this.client.callApi('GetClientsDomains', parameters, callback);
    }
    /**
     * Obtain a list of Client Purchased Products matching the provided criteria.
     * https://developers.whmcs.com/api-reference/getclientsproducts/
     * @param {GetClientsProductsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientsProducts(parameters, callback) {
        return this.client.callApi('GetClientsProducts', parameters, callback);
    }
    /**
     * Obtain the Client Contacts that match passed criteria.
     * https://developers.whmcs.com/api-reference/getcontacts/
     * @param {GetContactsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getContacts(parameters, callback) {
        return this.client.callApi('GetContacts', parameters, callback);
    }
    /**
     * Obtain a list of emails sent to a specific Client ID.
     * https://developers.whmcs.com/api-reference/getemails/
     * @param {GetEmailsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getEmails(parameters, callback) {
        return this.client.callApi('GetEmails', parameters, callback);
    }
    /**
     * Updates a client with the passed parameters.
     * https://developers.whmcs.com/api-reference/updateclient/
     * @param {UpdateClientParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateClient(parameters, callback) {
        return this.client.callApi('UpdateClient', parameters, callback);
    }
    /**
     * Updates a contact with the passed parameters.
     * https://developers.whmcs.com/api-reference/updatecontact/
     * @param {UpdateContactParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateContact(parameters, callback) {
        return this.client.callApi('UpdateContact', parameters, callback);
    }
}
exports.Client = Client;
