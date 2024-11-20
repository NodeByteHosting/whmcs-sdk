import { WhmcsClient } from '../lib/client';
import { AddBannedIpParams, DecryptPasswordParams, EncryptPasswordParams, GetActivityLogParams, GetAdminUsersParams, GetAutomationLogParams, GetConfigurationValueParams, GetEmailTemplatesParams, GetStatsParams, GetToDoItemsParams, LogActivityParams, SendAdminEmailParams, SendEmailParams, SetConfigurationValueParams, TriggerNotificationEventParams, UpdateAdminNotesParams, UpdateAnnouncementParams, UpdateToDoItemParams } from '../typings/system';
export declare class System {
    private client;
    /**
     * Creates a new System object
     * @param {WhmcsClient} whmcsHttpClient
     */
    constructor(client: WhmcsClient);
    /**
     * Adds an IP to the ban list.
     * https://developers.whmcs.com/api-reference/addbannedip/
     * @param {AddBannedIpParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    addBannedIp(parameters: AddBannedIpParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Decrypt an encrypted string.
     * https://developers.whmcs.com/api-reference/decryptpassword/
     * @param {DecryptPasswordParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    decryptPassword(parameters: DecryptPasswordParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Encrypt a string.
     * https://developers.whmcs.com/api-reference/encryptpassword/
     * @param {EncryptPasswordParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    encryptPassword(parameters: EncryptPasswordParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain the Activity Log that matches passed criteria.
     * https://developers.whmcs.com/api-reference/getactivitylog/
     * @param {GetActivityLogParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getActivityLog(parameters: GetActivityLogParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain the details for the current Admin User.
     * https://developers.whmcs.com/api-reference/getadmindetails/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAdminDetails(callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Retrieve a list of administrator user accounts.
     * https://developers.whmcs.com/api-reference/getadminusers/
     * @param {GetAdminUsersParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAdminUsers(parameters: GetAdminUsersParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Get Automation Task Log.
     * https://developers.whmcs.com/api-reference/getautomationlog/
     * @param {GetAutomationLogParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAutomationLog(parameters: GetAutomationLogParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Retrieve a System Configuration Value.
     * https://developers.whmcs.com/api-reference/getconfigurationvalue/
     * @param {GetConfigurationValueParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getConfigurationValue(parameters: GetConfigurationValueParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain the Currencies configured in the System.
     * https://developers.whmcs.com/api-reference/getcurrencies/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getCurrencies(callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain a list of email templates from the system.
     * https://developers.whmcs.com/api-reference/getemailtemplates/
     * @param {GetEmailTemplatesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getEmailTemplates(parameters: GetEmailTemplatesParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Retrieve Activated Payment Methods.
     * https://developers.whmcs.com/api-reference/getpaymentmethods/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getPaymentMethods(callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Retrieve a list of currently logged in admin users.
     * https://developers.whmcs.com/api-reference/getstaffonline/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getStaffOnline(callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Get business performance metrics and statistics.
     * https://developers.whmcs.com/api-reference/getstats/
     * @param {GetStatsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getStats(parameters: GetStatsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Get To-Do List Items.
     * https://developers.whmcs.com/api-reference/gettodoitems/
     * @param {GetToDoItemsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getToDoItems(parameters: GetToDoItemsParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain To Do item statuses and counts.
     * https://developers.whmcs.com/api-reference/gettodoitemstatuses/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getToDoItemStatuses(callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Creates an activity log entry.
     * https://developers.whmcs.com/api-reference/logactivity/
     * @param {LogActivityParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    logActivity(parameters: LogActivityParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Send an Admin Email Notification.
     * https://developers.whmcs.com/api-reference/sendadminemail/
     * @param {SendAdminEmailParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    sendAdminEmail(parameters: SendAdminEmailParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Send a client Email Notification.
     * https://developers.whmcs.com/api-reference/sendemail/
     * @param {SendEmailParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    sendEmail(parameters: SendEmailParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Set a System Configuration Value via the local API only.
     * https://developers.whmcs.com/api-reference/setconfigurationvalue/
     * @param {SetConfigurationValueParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    setConfigurationValue(parameters: SetConfigurationValueParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Trigger a Custom Notification Event.
     * https://developers.whmcs.com/api-reference/triggernotificationevent/
     * @param {TriggerNotificationEventParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    triggerNotificationEvent(parameters: TriggerNotificationEventParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Update the admin notes.
     * https://developers.whmcs.com/api-reference/updateadminnotes/
     * @param {UpdateAdminNotesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateAdminNotes(parameters: UpdateAdminNotesParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Update a specific announcement.
     * https://developers.whmcs.com/api-reference/updateannouncement/
     * @param {UpdateAnnouncementParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateAnnouncement(parameters: UpdateAnnouncementParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Update To-Do Item.
     * https://developers.whmcs.com/api-reference/updatetodoitem/
     * @param {UpdateToDoItemParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateToDoItem(parameters: UpdateToDoItemParams, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    /**
     * Obtain details pertaining to the current WHMCS installation.
     * https://developers.whmcs.com/api-reference/whmcsdetails/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    whmcsDetails(callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
}
