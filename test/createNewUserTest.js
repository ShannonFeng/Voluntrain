const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('createNewUserTest', function() {
    var name; 
    var email;
    var zipcode; 
    var password;
    var newUserInfo;
    it('should create a new user in database', function(done) {
        name = "New User"; 
        email = "createNewUserTest@test.com";
        zipcode = "66666"; 
        password = "testnewuserpassword987";
        newUserInfo = { name: name, email: email, zipcode: zipcode, password: password };
        // Create the new user
        queries.createNewUser(newUserInfo, () => { 
            // Make sure the new user was actually added to database
            queries.checkUserExists(email, (result) => {
                assert.equal(result, true);
                done();
            })
        });
    })
    // After test is executed, delete the user from the database
    after(function(done) {
        queries.deleteUser(email, () => {
            done();
        })
    })
})