import { WhmcsClient } from '../lib/client';

import {
    AddBannedIpParams,
    DecryptPasswordParams,
    EncryptPasswordParams,
    GetActivityLogParams,
    GetAdminUsersParams,
    GetAutomationLogParams,
    GetConfigurationValueParams,
    GetEmailTemplatesParams,
    GetStatsParams,
    GetToDoItemsParams,
    LogActivityParams,
    SendAdminEmailParams,
    SendEmailParams,
    SetConfigurationValueParams,
    TriggerNotificationEventParams,
    UpdateAdminNotesParams,
    UpdateAnnouncementParams,
    UpdateToDoItemParams
} from '../typings/system';

export class System {
    private client: WhmcsClient;

    /**
     * Creates a new System object
     * @param {WhmcsClient} whmcsHttpClient 
     */
    constructor(client: WhmcsClient) {
        this.client = client;
    }

    /**
     * Adds an IP to the ban list.
     * https://developers.whmcs.com/api-reference/addbannedip/
     * @param {AddBannedIpParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    addBannedIp(parameters: AddBannedIpParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('AddBannedIp', parameters, callback);
    }

    /**
     * Decrypt an encrypted string.
     * https://developers.whmcs.com/api-reference/decryptpassword/
     * @param {DecryptPasswordParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    decryptPassword(parameters: DecryptPasswordParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('DecryptPassword', parameters, callback);
    }

    /**
     * Encrypt a string.
     * https://developers.whmcs.com/api-reference/encryptpassword/
     * @param {EncryptPasswordParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    encryptPassword(parameters: EncryptPasswordParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('EncryptPassword', parameters, callback);
    }

    /**
     * Obtain the Activity Log that matches passed criteria.
     * https://developers.whmcs.com/api-reference/getactivitylog/
     * @param {GetActivityLogParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getActivityLog(parameters: GetActivityLogParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetActivityLog', parameters, callback);
    }

    /**
     * Obtain the details for the current Admin User.
     * https://developers.whmcs.com/api-reference/getadmindetails/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAdminDetails(callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetAdminDetails', callback as any);
    }

    /**
     * Retrieve a list of administrator user accounts.
     * https://developers.whmcs.com/api-reference/getadminusers/
     * @param {GetAdminUsersParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAdminUsers(parameters: GetAdminUsersParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetAdminUsers', parameters, callback);
    }

    /**
     * Get Automation Task Log.
     * https://developers.whmcs.com/api-reference/getautomationlog/
     * @param {GetAutomationLogParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAutomationLog(parameters: GetAutomationLogParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetAutomationLog', parameters, callback);
    }

    /**
     * Retrieve a System Configuration Value.
     * https://developers.whmcs.com/api-reference/getconfigurationvalue/
     * @param {GetConfigurationValueParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getConfigurationValue(parameters: GetConfigurationValueParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetConfigurationValue', parameters, callback);
    }

    /**
     * Obtain the Currencies configured in the System.
     * https://developers.whmcs.com/api-reference/getcurrencies/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getCurrencies(callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetCurrencies', callback as any);
    }

    /**
     * Obtain a list of email templates from the system.
     * https://developers.whmcs.com/api-reference/getemailtemplates/
     * @param {GetEmailTemplatesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getEmailTemplates(parameters: GetEmailTemplatesParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetEmailTemplates', parameters, callback);
    }

    /**
     * Retrieve Activated Payment Methods.
     * https://developers.whmcs.com/api-reference/getpaymentmethods/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getPaymentMethods(callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetPaymentMethods', callback as any);
    }

    /**
     * Retrieve a list of currently logged in admin users.
     * https://developers.whmcs.com/api-reference/getstaffonline/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getStaffOnline(callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetStaffOnline', callback as any);
    }

    /**
     * Get business performance metrics and statistics.
     * https://developers.whmcs.com/api-reference/getstats/
     * @param {GetStatsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getStats(parameters: GetStatsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetStats', parameters, callback);
    }

    /**
     * Get To-Do List Items.
     * https://developers.whmcs.com/api-reference/gettodoitems/
     * @param {GetToDoItemsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getToDoItems(parameters: GetToDoItemsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetToDoItems', parameters, callback);
    }

    /**
     * Obtain To Do item statuses and counts.
     * https://developers.whmcs.com/api-reference/gettodoitemstatuses/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getToDoItemStatuses(callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('GetToDoItemStatuses', callback as any);
    }

    /**
     * Creates an activity log entry.
     * https://developers.whmcs.com/api-reference/logactivity/
     * @param {LogActivityParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    logActivity(parameters: LogActivityParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('LogActivity', parameters, callback);
    }

    /**
     * Send an Admin Email Notification.
     * https://developers.whmcs.com/api-reference/sendadminemail/
     * @param {SendAdminEmailParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    sendAdminEmail(parameters: SendAdminEmailParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('SendAdminEmail', parameters, callback);
    }

    /**
     * Send a client Email Notification.
     * https://developers.whmcs.com/api-reference/sendemail/
     * @param {SendEmailParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    sendEmail(parameters: SendEmailParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('SendEmail', parameters, callback);
    }

    /**
     * Set a System Configuration Value via the local API only.
     * https://developers.whmcs.com/api-reference/setconfigurationvalue/
     * @param {SetConfigurationValueParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    setConfigurationValue(parameters: SetConfigurationValueParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('SetConfigurationValue', parameters, callback);
    }

    /**
     * Trigger a Custom Notification Event.
     * https://developers.whmcs.com/api-reference/triggernotificationevent/
     * @param {TriggerNotificationEventParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    triggerNotificationEvent(parameters: TriggerNotificationEventParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('TriggerNotificationEvent', parameters, callback);
    }

    /**
     * Update the admin notes.
     * https://developers.whmcs.com/api-reference/updateadminnotes/
     * @param {UpdateAdminNotesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateAdminNotes(parameters: UpdateAdminNotesParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('UpdateAdminNotes', parameters, callback);
    }

    /**
     * Update a specific announcement.
     * https://developers.whmcs.com/api-reference/updateannouncement/
     * @param {UpdateAnnouncementParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateAnnouncement(parameters: UpdateAnnouncementParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('UpdateAnnouncement', parameters, callback);
    }

    /**
     * Update To-Do Item.
     * https://developers.whmcs.com/api-reference/updatetodoitem/
     * @param {UpdateToDoItemParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateToDoItem(parameters: UpdateToDoItemParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('UpdateToDoItem', parameters, callback);
    }

    /**
     * Obtain details pertaining to the current WHMCS installation.
     * https://developers.whmcs.com/api-reference/whmcsdetails/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    whmcsDetails(callback?: (err: Error | null, data?: any) => void): Promise<any> | void {
        return this.client.callApi('WhmcsDetails', callback as any);
    }
}