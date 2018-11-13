const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('checkOrgExistsReturnTrue', function() {
    var name;
    var location;
    var zipcode;
    var bio;

    var orgInfo;
    // before test, first create an org
    before(function() {
        name = "TestOrgABC";
        location = "1122 Test Street";
        zipcode = "98765";
        bio = "Whats good.";

        orgInfo = { name: name, location: location, zipcode: zipcode, bio: bio };

        queries.createNewOrg(orgInfo, (done) => { });
    })
    it('should return true that org exists', function() {
        queries.checkOrgExists(name, (result) => {
            assert.equal(result, true);
        })
    })
    // after test, delete the org from db
    after(function() {
        queries.deleteOrg(name, (done) => { });
    })
})

describe('checkOrgExistsReturnFalse', function() {
    it('should return false; org should not exist', function() {
        queries.checkOrgExists("someUnknownOrgNameABCABCABC", (result) => {
            assert.equal(result, false);
        })
    })
})