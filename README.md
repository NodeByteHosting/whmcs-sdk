# WHMCS SDK

A comprehensive and easy-to-use Node SDK, designed to simplify interactions with the WHMCS API and streamline your development process.

## Table of Contents
- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Client](#client)
  - [Addons](#addons)
  - [Authentication](#authentication)
  - [Servers](#servers)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Pre-Requisites
Install [Node.js](https://nodejs.org/en/) version 20.0.0 or higher.

## Installation

To install the WHMCS SDK, use your preferred package manager:

### NPM
```sh
npm install whmcs-sdk
```

### Bun
```sh
bun install whmcs-sdk
```

## Yarn
```sh
yarn install whmcs-sdk
```

---

## Usage
To use the module you will first need to import it:

> Fun Fact: this module sets a User-Agent of "@nodebyte/whmcs-sdk"

```typescript
import { whmcsApi } from 'whmcs-sdk';
```

you can then instantiate a new client with options:

```typescript
const config = {
  apiIdentifier: 'your_api_identifier',
  apiSecret: 'your_api_secret',
  serverUrl: 'http://127.0.0.1',
}

const whmcs = new whmcsApi(config);
```

Additionally you can instantiate the client with a admin user
> Admin passwords should MD5 hashed

```typescript
const config = {
  username: process.env.WHMCS_USER || 'your_admin_username',
  password: process.env.WHMCS_PASSWORD || 'your_md5_hashed_password',
  accesskey: 'your_access_key', //optional (used to bypass IP Restrictions).
  serverUrl: 'http://127.0.0.1',
};

const whmcs = new WHMCS(config);
```

---

## WHMCS Modules
We follow [WHMCS' API Index](https://developers.whmcs.com/api/api-index/) structure, which has functions grouped by their respective modules. Below are the available modules and their functions:

## API
The [WHMCS API Index](https://developers.whmcs.com/api/api-index/) is regularly updated. Please refer to the list below to see which functions are currently implemented in this SDK (expand to show the function list).

<details>
  <summary>Addons</summary>

  - UpdateClientAddon: updateClientAddon(parameters, [callback])
</details>

<details>
  <summary>Affiliates</summary>
  
  - AffiliateActivate: affiliateActivate(parameters, [callback])
  - GetAffiliates: getAffiliates(parameters, [callback])
</details>

<details>
  <summary>Authentication</summary>
  
  - CreateOAuthCredential: createOAuthCredential(parameters, [callback])
  - CreateSsoToken: createSsoToken(parameters, [callback])
  - DeleteOAuthCredential: deleteOAuthCredential(parameters, [callback])
  - ListOAuthCredentials: listOAuthCredentials(parameters, [callback])
  - UpdateOAuthCredential: updateOAuthCredential(parameters, [callback])
  - ValidateLogin: validateLogin(parameters, [callback])
</details>

<details>
  <summary>Client</summary>

  - AddClient: addClient(parameters, [callback])
  - AddContact: addContact(parameters, [callback])
  - CloseClient: closeClient(parameters, [callback])
  - DeleteClient: deleteClient(parameters, [callback])
  - DeleteContact: deleteContact(parameters, [callback])
  - GetCancelledPackages: getCancelledPackages(parameters, [callback])
  - GetClientGroups: getClientGroups([callback])
  - GetClientPassword: getClientPassword(parameters, [callback])
  - GetClients: getClients(parameters, [callback])
  - GetClientsAddons: getClientsAddons(parameters, [callback])
  - GetClientsDetails: getClientsDetails(parameters, [callback])
  - GetClientsDomains: getClientsDomains(parameters, [callback])
  - GetClientsProducts: getClientsProducts(parameters, [callback])
  - GetContacts: getContacts(parameters, [callback])
  - GetEmails: getEmails(parameters, [callback])
  - UpdateClient: updateClient(parameters, [callback])
  - UpdateContact: updateContact(parameters, [callback])
</details>

<details>
  <summary>Servers</summary>

  - GetHealthStatus: getHealthStatus(parameters, [callback])
  - GetServers: getServers(parameters, [callback])
</details>

<details>
  <summary>System</summary>

  - AddBannedIp: addBannedIp(parameters, [callback])
  - DecryptPassword: decryptPassword(parameters, [callback])
  - EncryptPassword: encryptPassword(parameters, [callback])
  - GetActivityLog: getActivityLog(parameters, [callback])
  - GetAdminDetails: getAdminDetails([callback])
  - GetAdminUsers: getAdminUsers(parameters, [callback])
  - GetAutomationLog: getAutomationLog(parameters, [callback])
  - GetConfigurationValue: getConfigurationValue(parameters, [callback])
  - GetCurrencies: getCurrencies([callback])
  - GetEmailTemplates: getEmailTemplates(parameters, [callback])
  - GetPaymentMethods: getPaymentMethods([callback])
  - GetStaffOnline: getStaffOnline([callback])
  - GetStats: getStats(parameters, [callback])
  - GetToDoItems: getToDoItems(parameters, [callback])
  - GetToDoItemStatuses: getToDoItemStatuses([callback])
  - LogActivity: logActivity(parameters, [callback])
  - SendAdminEmail: sendAdminEmail(parameters, [callback])
  - SendEmail: sendEmail(parameters, [callback])
  - SetConfigurationValue: setConfigurationValue(parameters, [callback])
  - TriggerNotificationEvent: triggerNotificationEvent(parameters, [callback])
  - UpdateAdminNotes: updateAdminNotes(parameters, [callback])
  - UpdateAnnouncement: updateAnnouncement(parameters, [callback])
  - UpdateToDoItem: updateToDoItem(parameters, [callback])
  - WhmcsDetails: whmcsDetails([callback])
</details>