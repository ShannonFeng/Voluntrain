const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('deleteOrgTest', function() {
    var orgName;
    var location;
    var zipcode;
    var bio;

    var dummyOrgInfo;

    // before test, create a dummy org
    before(function() {
        orgName = "TestOrg123";
        location = "123 ThisIsATest Street";
        zipcode = "12345";
        bio = "TestOrgBio";

        dummyOrgInfo = { name: orgName, location: location, zipcode: zipcode, bio: bio };

        queries.createNewOrg(dummyOrgInfo, (done) => { });
    })
    it('should delete dummy org and make sure org no longer exists', function() {
        queries.deleteOrg(orgName, (done) => {
            queries.checkOrgExists(orgName, (orgExists) => {
                assert.equal(orgExists, false);
            })
        })
    })
})