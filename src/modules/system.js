"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
class System {
    /**
     * Creates a new System object
     * @param {WhmcsClient} whmcsHttpClient
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Adds an IP to the ban list.
     * https://developers.whmcs.com/api-reference/addbannedip/
     * @param {AddBannedIpParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    addBannedIp(parameters, callback) {
        return this.client.callApi('AddBannedIp', parameters, callback);
    }
    /**
     * Decrypt an encrypted string.
     * https://developers.whmcs.com/api-reference/decryptpassword/
     * @param {DecryptPasswordParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    decryptPassword(parameters, callback) {
        return this.client.callApi('DecryptPassword', parameters, callback);
    }
    /**
     * Encrypt a string.
     * https://developers.whmcs.com/api-reference/encryptpassword/
     * @param {EncryptPasswordParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    encryptPassword(parameters, callback) {
        return this.client.callApi('EncryptPassword', parameters, callback);
    }
    /**
     * Obtain the Activity Log that matches passed criteria.
     * https://developers.whmcs.com/api-reference/getactivitylog/
     * @param {GetActivityLogParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getActivityLog(parameters, callback) {
        return this.client.callApi('GetActivityLog', parameters, callback);
    }
    /**
     * Obtain the details for the current Admin User.
     * https://developers.whmcs.com/api-reference/getadmindetails/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAdminDetails(callback) {
        return this.client.callApi('GetAdminDetails', callback);
    }
    /**
     * Retrieve a list of administrator user accounts.
     * https://developers.whmcs.com/api-reference/getadminusers/
     * @param {GetAdminUsersParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAdminUsers(parameters, callback) {
        return this.client.callApi('GetAdminUsers', parameters, callback);
    }
    /**
     * Get Automation Task Log.
     * https://developers.whmcs.com/api-reference/getautomationlog/
     * @param {GetAutomationLogParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getAutomationLog(parameters, callback) {
        return this.client.callApi('GetAutomationLog', parameters, callback);
    }
    /**
     * Retrieve a System Configuration Value.
     * https://developers.whmcs.com/api-reference/getconfigurationvalue/
     * @param {GetConfigurationValueParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getConfigurationValue(parameters, callback) {
        return this.client.callApi('GetConfigurationValue', parameters, callback);
    }
    /**
     * Obtain the Currencies configured in the System.
     * https://developers.whmcs.com/api-reference/getcurrencies/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getCurrencies(callback) {
        return this.client.callApi('GetCurrencies', callback);
    }
    /**
     * Obtain a list of email templates from the system.
     * https://developers.whmcs.com/api-reference/getemailtemplates/
     * @param {GetEmailTemplatesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getEmailTemplates(parameters, callback) {
        return this.client.callApi('GetEmailTemplates', parameters, callback);
    }
    /**
     * Retrieve Activated Payment Methods.
     * https://developers.whmcs.com/api-reference/getpaymentmethods/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getPaymentMethods(callback) {
        return this.client.callApi('GetPaymentMethods', callback);
    }
    /**
     * Retrieve a list of currently logged in admin users.
     * https://developers.whmcs.com/api-reference/getstaffonline/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getStaffOnline(callback) {
        return this.client.callApi('GetStaffOnline', callback);
    }
    /**
     * Get business performance metrics and statistics.
     * https://developers.whmcs.com/api-reference/getstats/
     * @param {GetStatsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getStats(parameters, callback) {
        return this.client.callApi('GetStats', parameters, callback);
    }
    /**
     * Get To-Do List Items.
     * https://developers.whmcs.com/api-reference/gettodoitems/
     * @param {GetToDoItemsParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getToDoItems(parameters, callback) {
        return this.client.callApi('GetToDoItems', parameters, callback);
    }
    /**
     * Obtain To Do item statuses and counts.
     * https://developers.whmcs.com/api-reference/gettodoitemstatuses/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    getToDoItemStatuses(callback) {
        return this.client.callApi('GetToDoItemStatuses', callback);
    }
    /**
     * Creates an activity log entry.
     * https://developers.whmcs.com/api-reference/logactivity/
     * @param {LogActivityParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    logActivity(parameters, callback) {
        return this.client.callApi('LogActivity', parameters, callback);
    }
    /**
     * Send an Admin Email Notification.
     * https://developers.whmcs.com/api-reference/sendadminemail/
     * @param {SendAdminEmailParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    sendAdminEmail(parameters, callback) {
        return this.client.callApi('SendAdminEmail', parameters, callback);
    }
    /**
     * Send a client Email Notification.
     * https://developers.whmcs.com/api-reference/sendemail/
     * @param {SendEmailParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    sendEmail(parameters, callback) {
        return this.client.callApi('SendEmail', parameters, callback);
    }
    /**
     * Set a System Configuration Value via the local API only.
     * https://developers.whmcs.com/api-reference/setconfigurationvalue/
     * @param {SetConfigurationValueParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    setConfigurationValue(parameters, callback) {
        return this.client.callApi('SetConfigurationValue', parameters, callback);
    }
    /**
     * Trigger a Custom Notification Event.
     * https://developers.whmcs.com/api-reference/triggernotificationevent/
     * @param {TriggerNotificationEventParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    triggerNotificationEvent(parameters, callback) {
        return this.client.callApi('TriggerNotificationEvent', parameters, callback);
    }
    /**
     * Update the admin notes.
     * https://developers.whmcs.com/api-reference/updateadminnotes/
     * @param {UpdateAdminNotesParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateAdminNotes(parameters, callback) {
        return this.client.callApi('UpdateAdminNotes', parameters, callback);
    }
    /**
     * Update a specific announcement.
     * https://developers.whmcs.com/api-reference/updateannouncement/
     * @param {UpdateAnnouncementParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateAnnouncement(parameters, callback) {
        return this.client.callApi('UpdateAnnouncement', parameters, callback);
    }
    /**
     * Update To-Do Item.
     * https://developers.whmcs.com/api-reference/updatetodoitem/
     * @param {UpdateToDoItemParams} parameters Request parameters
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    updateToDoItem(parameters, callback) {
        return this.client.callApi('UpdateToDoItem', parameters, callback);
    }
    /**
     * Obtain details pertaining to the current WHMCS installation.
     * https://developers.whmcs.com/api-reference/whmcsdetails/
     * @param {Function} callback Optional callback. If not set the method returns a Promise
     */
    whmcsDetails(callback) {
        return this.client.callApi('WhmcsDetails', callback);
    }
}
exports.System = System;
