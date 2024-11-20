export interface WHMCSOptions {
    host: string;
    identifier: string;
    secret: string;
    endpoint?: string;
}

export interface ModemOptions {
    method?: string;
    responsetype?: string;
    raw?: boolean;
    [key: string]: any;
}