# WHMCS SDK

A comprehensive and easy-to-use Node SDK, designed to simplify interactions with the WHMCS API and streamline your development process.

---

## Table of Contents
- [Useful Info](#useful-info)
- [Installation](#installation)
  - [NPM](#npm)
  - [Bun](#bun)
  - [Yarn](#yarn)
- [Implemented Functions](#implemented-functions)
  - [Main Functions](#main-functions)
  - [Helper Functions](#helper-functions)
- [Usage](#usage)
  - [Using the client](#using-the-client)
  - [Using the Helper Functions](#using-the-helper-functions)

---

## Useful Info
- Install [Node.js](https://nodejs.org/en/) version 20.0.0 or higher.
- Only API Credentials are supported for authenticating (username and password is [depreciated](https://developers.whmcs.com/api/authentication/) as of 7.2!)
- For a full list of Modules/Methods visit the [WHMCS Docs](https://developers.whmcs.com/api/api-index/)

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

## Implemented Functions
There is a variety of pre-made functions you can use to help make your experience more seamless.

### Main Functions
- call(action, options)

### Helper Functions
- get(action, options): An alias of `call` but appends `Get` to the name.
- add(action, options): An alias of `call` but appends `Add` to the name.
- update(action, options): An alias of `call` but appends `Update` to the name.
- delete(action, options): An alias of `call` but appends `Delete` to the name.

> The "action" (string) is the name of a [WHMCS API Index](https://developers.whmcs.com/api/api-index/) name. The "options" (object) of any parameters you want to pass in.

---

## Usage
To use the module you will first need to import it:

```typescript
import { whmcsApi } from 'whmcs-sdk';
```

you can then instantiate a new client with options:

```typescript
const whmcs = new whmcsApi({
  host: 'yourwebsite.com',
  identifier: 'api identifier',
  secret: 'api secret'
  //endpoint: 'includes/api.php', //only required if you changed the api.php location
});
```

### Using the client

```typescript
whmcs.call('DomainWhois', {
  domain: 'whmcs.com'
}, function (err, res, body) {
  if (err) return console.log('Error:', err);

  console.log('Domain information:', body);
});
```

### Using the Helper Functions
```typescript
whmcs.get('Servers')
.then(servers => console.log('Servers:' servers))
.catch(err => console.error('Error:', err));
```

---