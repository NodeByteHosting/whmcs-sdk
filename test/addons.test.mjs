import { expect } from 'chai';
import { whmcs } from './testConfig.mjs';

describe('Module Addons', function () {

    it('should update client addon', function (done) {
        let opts = { id: 1 };

        whmcs.addons.updateClientAddon(opts, function (err, details) {
            if (err && err.message.indexOf('Addon ID Not Found') > -1) {
                done();
            } else {
                expect(err).to.be.null;
                expect(details).to.have.a.property('result').to.equal('success');
                done();
            }
        });
    });
});