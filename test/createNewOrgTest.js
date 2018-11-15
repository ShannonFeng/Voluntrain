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
        orgName = "TestOrg123";
        location = "123 ThisIsATest Street";
        zipcode = "12345";
        bio = "TestOrgBio";

        testOrgInfo = { name: orgName, location: location, zipcode: zipcode, bio: bio };
    })
    it('should successfully create a new organization with the specified info', function() {
        queries.createNewOrg(testOrgInfo, (done) => {
            queries.getOrgInfo(orgName, (returnedOrgInfo) => {
                assert.equal(returnedOrgInfo, testOrgInfo);
            })
        })
    })
    // After test is executed, delete the organization from the database
    after(function() {
        queries.deleteOrg(orgName, (done) => {})
    })
})