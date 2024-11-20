"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whmcsApi = void 0;
const client_1 = require("./lib/client");
const index_1 = __importDefault(require("./modules/index"));
class whmcsApi {
    constructor(options) {
        this.whmcsClient = new client_1.WhmcsClient(options);
        this.addons = new index_1.default.Addons(this.whmcsClient);
        this.affiliates = new index_1.default.Affiliates(this.whmcsClient);
        this.authentication = new index_1.default.Authentication(this.whmcsClient);
        this.client = new index_1.default.Client(this.whmcsClient);
        this.servers = new index_1.default.Servers(this.whmcsClient);
    }
}
exports.whmcsApi = whmcsApi;
