import { Configs } from "./typings";
import { WhmcsClient } from "./lib/client";
import { Addons } from "./modules/addons";
import { Affiliates } from "./modules/affiliates";
import { Authentication } from "./modules/authentication";
import { Client } from "./modules/client";
import { Servers } from "./modules/servers";

export class whmcsApi {
    public addons: Addons;
    public affiliates: Affiliates;
    public authentication: Authentication;
    public client: Client;
    public servers: Servers;

    public whmcsClient: WhmcsClient;

    constructor(options: Configs) {
        this.whmcsClient = new WhmcsClient(options);

        this.addons = new Addons(this.whmcsClient);
        this.affiliates = new Affiliates(this.whmcsClient);
        this.authentication = new Authentication(this.whmcsClient);
        this.client = new Client(this.whmcsClient);
        this.servers = new Servers(this.whmcsClient);
    }
}