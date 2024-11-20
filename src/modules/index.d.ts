import { Addons } from "./addons";
import { Affiliates } from "./affiliates";
import { Authentication } from "./authentication";
import { Client } from "./client";
import { Servers } from "./servers";
declare const Modules: {
    Addons: typeof Addons;
    Affiliates: typeof Affiliates;
    Authentication: typeof Authentication;
    Client: typeof Client;
    Servers: typeof Servers;
};
export default Modules;
