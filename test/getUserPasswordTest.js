const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('getUserPasswordTest', function() {
    var name;
    var email;
    var zipcode;
    var password;
    var newUserInfo;
    // before test, first create a test user
    before(function(done) {
        name = "Test User"; 
        email = "getUserPasswordTest@test.com";
        zipcode = "11111"; 
        password = "testuserpassword%%^^11";
        
        newUserInfo = { name: name, email: email, zipcode: zipcode, password: password };
        queries.createNewUser(newUserInfo, () => { 
            done();
        });
    })
    it('should successfully retrieve user password from database', function(done) {
        queries.getUserPassword(email, (resultPassword) => {
            // Assert that a password is actually returned
            assert.isDefined(resultPassword);
            // Note: resultPassword should be an encrypted password
            // So resultPassword should NOT match original password
            assert.notEqual(resultPassword, password);
            done();
        })
    })
    // After test is executed, delete the user from the database
    after(function(done) {
        queries.deleteUser(email, () => {
            done();
        })
    })
})