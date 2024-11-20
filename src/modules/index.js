"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addons_1 = require("./addons");
const affiliates_1 = require("./affiliates");
const authentication_1 = require("./authentication");
const client_1 = require("./client");
const servers_1 = require("./servers");
const Modules = {
    Addons: addons_1.Addons,
    Affiliates: affiliates_1.Affiliates,
    Authentication: authentication_1.Authentication,
    Client: client_1.Client,
    Servers: servers_1.Servers
};
exports.default = Modules;
