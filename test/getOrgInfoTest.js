const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('getOrgInfoTest', function() {
    var orgName;
    var location;
    var zipcode;
    var bio;
    var orgInfo;
    // before test, create a test org
    before(function(done) {
        orgName = "The getOrgInfoTest Org";
        location = "123 ThisIsATest Street";
        zipcode = "12345";
        bio = "TestOrgBio";
        orgInfo = { name: orgName, location: location, zipcode: zipcode, bio: bio };
        queries.createNewOrg(orgInfo, () => { 
            done();
        });
    })
    it('should retreive all org info and verify it is correct', function(done) {
        queries.getOrgInfo(orgName, (orgInfo) => {
            assert.equal(orgInfo.name, orgName);
            assert.equal(orgInfo.location, location);
            assert.equal(orgInfo.zipcode, zipcode);
            assert.equal(orgInfo.bio, bio);
            done();
        })
    })
    // After test is executed, delete the org from the database
    after(function(done) {
        queries.deleteOrg(orgName, () => {
            done();
        })
    })
})