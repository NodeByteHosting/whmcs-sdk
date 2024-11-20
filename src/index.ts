import { Configs } from "./typings";
import { WhmcsClient } from "./lib/client";
import Modules from "./modules/index";

export class whmcsApi {
    /** @type {import('./modules/addons')} */ addons;
    /** @type {import('./modules/affiliates')} */ affiliates;
    /** @type {import('./modules/authentication')} */ authentication;
    /** @type {import('./modules/client')} */ client;
    /** @type {import('./modules/servers')} */ servers;

    public whmcsClient: WhmcsClient;

    constructor(options: Configs) {
        this.whmcsClient = new WhmcsClient(options);

        this.addons = new Modules.Addons(this.whmcsClient);
        this.affiliates = new Modules.Affiliates(this.whmcsClient);
        this.authentication = new Modules.Authentication(this.whmcsClient);
        this.client = new Modules.Client(this.whmcsClient);
        this.servers = new Modules.Servers(this.whmcsClient);
    }
}