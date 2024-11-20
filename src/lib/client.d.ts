import { Configs } from '../typings';
export declare class WhmcsClient {
    private apiSecret;
    private apiIdentifier;
    private username;
    private password;
    private accessKey;
    private serverUrl;
    private Promise;
    private responseType;
    private userAgent;
    private proxyUrl;
    private axiosInstance;
    private timeout;
    constructor(config?: Configs);
    /**
     * Executes a WHMCS' API action with given parameters.
     * WHMCS' official action list available here: https://developers.whmcs.com/api/api-index/
     * @param action Command name
     * @param parameters Request parameters (JSON Object)
     * @param callback Optional callback. If not set the method returns a Promise
     */
    callApi(action: string, parameters: Record<string, any>, callback?: (err: Error | null, data?: any) => void): Promise<any> | void;
    private post;
}
