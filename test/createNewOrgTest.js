const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('createNewOrgTest', function() {
    var orgName;
    var location;
    var zipcode;
    var bio;
    var testOrgInfo;

    // Before test, set up the test organization to be created
    before(function() {
        orgName = "The createNewOrgTest Org";
        location = "123 ThisIsATest Street";
        zipcode = "12345";
        bio = "TestOrgBio";

        testOrgInfo = { name: orgName, location: location, zipcode: zipcode, bio: bio };
    })
    it('should successfully create a new organization with the specified info', function(done) {
        queries.createNewOrg(testOrgInfo, () => {
            queries.getOrgInfo(orgName, (returnedOrgInfo) => {
                assert.equal(returnedOrgInfo.name, testOrgInfo.name);
                assert.equal(returnedOrgInfo.location, testOrgInfo.location);
                assert.equal(returnedOrgInfo.zipcode, testOrgInfo.zipcode);
                assert.equal(returnedOrgInfo.bio, testOrgInfo.bio);
                done();
            })
        })
    })
    // After test is executed, delete the organization from the database
    after(function(done) {
        queries.deleteOrg(orgName, () => {
            done();
        })
    })
})