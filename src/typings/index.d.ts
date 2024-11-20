import { AxiosRequestConfig } from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";

export interface Configs {
    username?: string;
    password?: string;
    serverUrl?: string;
    timeout?: number;
    apiIdentifier?: string;
    apiSecret?: string;
    accessKey?: string;
    Promise?: PromiseConstructor;
    responseType?: string;
    userAgent?: string;
    proxyUrl?: string;
}

export interface AxiosConfig extends AxiosRequestConfig {
    baseUrl: string;
    timeout: number;
    httpsAgent?: HttpsProxyAgent;
    headers: {
        'Content-Type': string;
        'User-Agent': string;
    }
}