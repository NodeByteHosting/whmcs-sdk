export interface AddClientParams {
    // Define the parameters for addClient method
    firstname: string;
    lastname: string;
    email: string;
    address1: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    phonenumber: string;
    password2: string;
    [key: string]: any;
}

export interface AddContactParams {
    // Define the parameters for addContact method
    clientid: number;
    firstname: string;
    lastname: string;
    email: string;
    address1: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    phonenumber: string;
    [key: string]: any;
}

export interface CloseClientParams {
    // Define the parameters for closeClient method
    clientid: number;
}

export interface DeleteClientParams {
    // Define the parameters for deleteClient method
    clientid: number;
    deleteusers?: boolean;
    deletetransactions?: boolean;
}

export interface DeleteContactParams {
    // Define the parameters for deleteContact method
    contactid: number;
}

export interface GetCancelledPackagesParams {
    // Define the parameters for getCancelledPackages method
    limitstart?: number;
    limitnum?: number;
}

export interface GetClientPasswordParams {
    // Define the parameters for getClientPassword method
    userid: number;
}

export interface GetClientsParams {
    // Define the parameters for getClients method
    limitstart?: number;
    limitnum?: number;
    search?: string;
}

export interface GetClientsAddonsParams {
    // Define the parameters for getClientsAddons method
    clientid: number;
}

export interface GetClientsDetailsParams {
    clientid?: number;
    email?: string;
    stats?: boolean;
}

export interface GetClientsDomainsParams {
    // Define the parameters for getClientsDomains method
    clientid: number;
}

export interface GetClientsProductsParams {
    // Define the parameters for getClientsProducts method
    clientid: number;
}

export interface GetContactsParams {
    // Define the parameters for getContacts method
    clientid: number;
}

export interface GetEmailsParams {
    // Define the parameters for getEmails method
    clientid: number;
}

export interface UpdateClientParams {
    // Define the parameters for updateClient method
    clientid: number;
    [key: string]: any;
}

export interface UpdateContactParams {
    // Define the parameters for updateContact method
    contactid: number;
    [key: string]: any;
}