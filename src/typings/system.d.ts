export interface AddBannedIpParams {
  // Define the parameters for addBannedIp method
  ip: string;
  reason?: string;
  expires?: string;
}

export interface DecryptPasswordParams {
  // Define the parameters for decryptPassword method
  password2: string;
}

export interface EncryptPasswordParams {
  // Define the parameters for encryptPassword method
  password2: string;
}

export interface GetActivityLogParams {
  // Define the parameters for getActivityLog method
  limitstart?: number;
  limitnum?: number;
}

export interface GetAdminUsersParams {
  // Define the parameters for getAdminUsers method
  roleid?: number;
}

export interface GetAutomationLogParams {
  // Define the parameters for getAutomationLog method
  limitstart?: number;
  limitnum?: number;
}

export interface GetConfigurationValueParams {
  // Define the parameters for getConfigurationValue method
  setting: string;
}

export interface GetEmailTemplatesParams {
  // Define the parameters for getEmailTemplates method
  type?: string;
}

export interface GetStatsParams {
  // Define the parameters for getStats method
  [key: string]: any;
}

export interface GetToDoItemsParams {
  // Define the parameters for getToDoItems method
  status?: string;
}

export interface LogActivityParams {
  // Define the parameters for logActivity method
  description: string;
}

export interface SendAdminEmailParams {
  // Define the parameters for sendAdminEmail method
  messagename: string;
  id: number;
}

export interface SendEmailParams {
  // Define the parameters for sendEmail method
  messagename: string;
  id: number;
}

export interface SetConfigurationValueParams {
  // Define the parameters for setConfigurationValue method
  setting: string;
  value: string;
}

export interface TriggerNotificationEventParams {
  // Define the parameters for triggerNotificationEvent method
  notification_identifier: string;
}

export interface UpdateAdminNotesParams {
  // Define the parameters for updateAdminNotes method
  notes: string;
}

export interface UpdateAnnouncementParams {
  // Define the parameters for updateAnnouncement method
  announcementid: number;
  title?: string;
  announcement?: string;
  published?: boolean;
}

export interface UpdateToDoItemParams {
  // Define the parameters for updateToDoItem method
  itemid: number;
  status?: string;
  duedate?: string;
  admin?: string;
  description?: string;
}