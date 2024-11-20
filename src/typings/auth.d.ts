export interface CreateOAuthCredentialParams {
    grantType: 'authorization_code' | 'single_sign_on';
    scope: string;
    name?: string;
    serviceId?: string;
    description?: number;
    logoUri?: string;
    redirectUri?: string;
}

export interface CreateSsoTokenParams {
    client_id?: number;
    user_id?: number;
    destination?: string;
    service_id?: number;
    domain_id?: number;
    sso_redirect_path?: string;
}

export interface DeleteOAuthCredentialParams {
    credentialId: number;
}

export interface ListOAuthCredentialsParams {
    grantType?: string;
    sortField?: string;
    sortOrder?: 'ASC' | 'DESC';
    limit?: number;
}

export interface UpdateOAuthCredentialParams {
    credentialId: number;
    clientApiIdentifier?: string;
    name?: string;
    description?: string;
    grantType?: 'authorization_code' | 'single_sign_on';
    scope?: string;
    serviceId?: number;
    logoUri?: string[];
    redirectUri?: string;
    resetSecret?: boolean;
}

export interface ValidateLoginParams {
    email: string;
    password2: string;
}