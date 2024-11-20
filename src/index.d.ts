import { Configs } from "./typings";
import { WhmcsClient } from "./lib/client";
export declare class whmcsApi {
    /** @type {import('./modules/addons')} */ addons: import("./modules/addons").Addons;
    /** @type {import('./modules/affiliates')} */ affiliates: import("./modules/affiliates").Affiliates;
    /** @type {import('./modules/authentication')} */ authentication: import("./modules/authentication").Authentication;
    /** @type {import('./modules/client')} */ client: import("./modules/client").Client;
    /** @type {import('./modules/servers')} */ servers: import("./modules/servers").Servers;
    whmcsClient: WhmcsClient;
    constructor(options: Configs);
}
