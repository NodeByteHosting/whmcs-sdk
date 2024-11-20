import { WhmcsClient } from '../lib/client';
import { AddClientParams, AddContactParams, CloseClientParams, DeleteClientParams, DeleteContactParams, GetCancelledPackagesParams, GetClientPasswordParams, GetClientsParams, GetClientsAddonsParams, GetClientsDetailsParams, GetClientsDomainsParams, GetClientsProductsParams, GetContactsParams, GetEmailsParams, UpdateClientParams, UpdateContactParams } from '../typings/client';
export declare class Client {
    private client;
    /**
     * Creates a new Client object
     * @param {client} whmcsHttpClient
     */
    constructor(client: WhmcsClient);
    /**
     * Adds a client.
     * https://developers.whmcs.com/api-reference/addclient/
     * @param {AddClientParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    addClient(parameters: AddClientParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Adds a contact to a client account.
     * https://developers.whmcs.com/api-reference/addcontact/
     * @param {AddContactParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    addContact(parameters: AddContactParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Close a Client.
     * https://developers.whmcs.com/api-reference/closeclient/
     * @param {CloseClientParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    closeClient(parameters: CloseClientParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Deletes a client.
     * https://developers.whmcs.com/api-reference/deleteclient/
     * @param {DeleteClientParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    deleteClient(parameters: DeleteClientParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Deletes a contact.
     * https://developers.whmcs.com/api-reference/deletecontact/
     * @param {DeleteContactParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    deleteContact(parameters: DeleteContactParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain an array of cancellation requests.
     * https://developers.whmcs.com/api-reference/getcancelledpackages/
     * @param {GetCancelledPackagesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getCancelledPackages(parameters: GetCancelledPackagesParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain an array of client groups.
     * https://developers.whmcs.com/api-reference/getclientgroups/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientGroups(callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain the encrypted client password.
     * https://developers.whmcs.com/api-reference/getclientpassword/
     * @param {GetClientPasswordParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientPassword(parameters: GetClientPasswordParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain the Clients that match passed criteria.
     * https://developers.whmcs.com/api-reference/getclients/
     * @param {GetClientsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClients(parameters: GetClientsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain the Clients Product Addons that match passed criteria.
     * https://developers.whmcs.com/api-reference/getclientsaddons/
     * @param {GetClientsAddonsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientsAddons(parameters: GetClientsAddonsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain the Clients Details for a specific client.
     * https://developers.whmcs.com/api-reference/getclientsdetails/
     * @param {GetClientsDetailsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientsDetails(parameters: GetClientsDetailsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain a list of Client Purchased Domains matching the provided criteria.
     * https://developers.whmcs.com/api-reference/getclientsdomains/
     * @param {GetClientsDomainsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientsDomains(parameters: GetClientsDomainsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain a list of Client Purchased Products matching the provided criteria.
     * https://developers.whmcs.com/api-reference/getclientsproducts/
     * @param {GetClientsProductsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getClientsProducts(parameters: GetClientsProductsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain the Client Contacts that match passed criteria.
     * https://developers.whmcs.com/api-reference/getcontacts/
     * @param {GetContactsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getContacts(parameters: GetContactsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain a list of emails sent to a specific Client ID.
     * https://developers.whmcs.com/api-reference/getemails/
     * @param {GetEmailsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getEmails(parameters: GetEmailsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Updates a client with the passed parameters.
     * https://developers.whmcs.com/api-reference/updateclient/
     * @param {UpdateClientParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateClient(parameters: UpdateClientParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Updates a contact with the passed parameters.
     * https://developers.whmcs.com/api-reference/updatecontact/
     * @param {UpdateContactParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateContact(parameters: UpdateContactParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
}
