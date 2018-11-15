const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('checkOrgExistsTest', function() {
    var name;
    var location;
    var zipcode;
    var bio;

    var orgInfo;
    // before test, first create an org
    before(function(done) {
        name = "The checkOrgExistsTest Org";
        location = "1122 Test Street";
        zipcode = "98765";
        bio = "Whats good.";

        orgInfo = { name: name, location: location, zipcode: zipcode, bio: bio };

        queries.createNewOrg(orgInfo, () => { 
            done();
        });
    })
    it('should return true that org exists', function(done) {
        queries.checkOrgExists(name, (result) => {
            assert.equal(result, true);
            done();
        })
    })
    it('should return false since org should not exist', function(done) {
        queries.checkOrgExists("someUnknownOrgNameABCABCABC", (result) => {
            assert.equal(result, false);
            done();
        })
    })
    // after test, delete the org from db
    after(function(done) {
        queries.deleteOrg(name, () => { 
            done();
        });
    })
})