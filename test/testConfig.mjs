import { whmcsApi } from '../../dist/index.js';

let config = {
    apiIdentifier: process.env.WHMCS_API_IDENTIFIER || "apiIdentifier",
    apiSecret: process.env.WHMCS_API_SECRET || 'apiSecret',
    serverUrl: process.env.WHMCS_SERVER_URL || 'http://127.0.0.1'
};

const whmcs = new whmcsApi(config);

let userDetails = {
    firstname: 'John',
    lastname: 'doe',
    email: 'johndoe@john.doe',
    address1: '1234 John Doe Street',
    city: 'John Doe City',
    state: 'John Doe State',
    postcode: '123456',
    country: 'US',
    phonenumber: '1234567890',
    password2: 'password',
}

let contactDetails = {
    firstname: 'John',
    lastname: 'doe',
    email: 'johndoe@john.doe',
    address1: '1234 John Doe Street',
    city: 'John Doe City',
    state: 'John Doe State',
    postcode: '123456',
    country: 'US',
    phonenumber: '1234567890',
}

export function initialize(done) {
    console.log('Preparing the test environment. Please wait...');

    whmcs.client.addClient(userDetails, function (err, res) {
        if (err) {
            done(err);
        } else {
            global.demoUserId = res.owner_id;
            global.demoClientId = res.clientid;

            contactDetails.clientid = res.clientid;
            whmcs.client.addContact(contactDetails, function (err, details) {
                if (err) {
                    done(err);
                } else {
                    global.demoContactId = details.contactid;
                    console.log('Test environment initialization complete.');
                    done();
                }
            });
        }
    });
}

export function rollback(done) {
    console.log('Removing the temporary data. Please wait...');

    let opts = {
        clientid: global.demoClientId,
        deleteusers: true,
        deletetransactions: true
    };
    whmcs.client.deleteClient(opts, function (err, res) {
        done(err);
    });
}

before(function (done) {
    this.timeout(60000);
    initialize(done);
});

after(function (done) {
    this.timeout(60000);
    rollback(done);
});

export function serialize(mixed_value) {
    let val, key, okey,
        ktype = '',
        vals = '',
        count = 0,
        _utf8Size = function (str) {
            let size = 0,
                i = 0,
                l = str.length,
                code = '';
            for (i = 0; i < l; i++) {
                code = str.charCodeAt(i);
                if (code < 0x0080) {
                    size += 1;
                } else if (code < 0x0800) {
                    size += 2;
                } else {
                    size += 3;
                }
            }
            return size;
        },
        _getType = function (inp) {
            let match, key, cons, types, type = typeof inp;

            if (type === 'object' && !inp) {
                return 'null';
            }
            if (type === 'object') {
                if (!inp.constructor) {
                    return 'object';
                }
                cons = inp.constructor.toString();
                match = cons.match(/(\w+)\(/);
                if (match) {
                    cons = match[1].toLowerCase();
                }
                types = ['boolean', 'number', 'string', 'array'];
                for (key in types) {
                    if (cons == types[key]) {
                        type = types[key];
                        break;
                    }
                }
            }
            return type;
        },
        type = _getType(mixed_value);

    switch (type) {
        case 'function':
            val = '';
            break;
        case 'boolean':
            val = 'b:' + (mixed_value ? '1' : '0');
            break;
        case 'number':
            val = (Math.round(mixed_value) == mixed_value ? 'i' : 'd') + ':' + mixed_value;
            break;
        case 'string':
            val = 's:' + _utf8Size(mixed_value) + ':"' + mixed_value + '"';
            break;
        case 'array':
        case 'object':
            val = 'a';

            for (key in mixed_value) {
                if (mixed_value.hasOwnProperty(key)) {
                    ktype = _getType(mixed_value[key]);
                    if (ktype === 'function') {
                        continue;
                    }

                    okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
                    vals += serialize(okey) + serialize(mixed_value[key]);
                    count++;
                }
            }
            val += ':' + count + ':{' + vals + '}';
            break;
        default:
            val = 'N';
            break;
    }
    if (type !== 'object' && type !== 'array') {
        val += ';';
    }
    return val;
}

export { whmcs, userDetails as demoUserDetails, contactDetails as demoContactDetails };