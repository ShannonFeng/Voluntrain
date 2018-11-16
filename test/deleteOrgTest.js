const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('deleteOrgTest', function() {
    var orgName;
    var location;
    var zipcode;
    var bio;
    var orgInfo;
    // before test, create an org
    before(function(done) {
        orgName = "The deleteOrgTest Org";
        location = "123 ThisIsATest Street";
        zipcode = "12345";
        bio = "TestOrgBio";
        orgInfo = { name: orgName, location: location, zipcode: zipcode, bio: bio };
        queries.createNewOrg(orgInfo, () => { 
            done();
        });
    })
    it('should delete org and make sure org no longer exists', function(done) {
        queries.deleteOrg(orgName, () => {
            queries.checkOrgExists(orgName, (orgExists) => {
                assert.equal(orgExists, false);
                done();
            })
        })
    })
})