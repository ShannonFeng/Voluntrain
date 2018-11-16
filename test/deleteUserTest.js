const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('deleteUserTest', function() {
    var name;
    var email;
    var zipcode;
    var password;
    var newUserInfo;
    // before test, first create a test user
    before(function(done) {
        name = "Test User"; 
        email = "deleteUserTest@test.com";
        zipcode = "44444"; 
        password = "testuserpassword%%^^11";
        
        newUserInfo = { name: name, email: email, zipcode: zipcode, password: password };
        queries.createNewUser(newUserInfo, () => { 
            done();
        });
    })
    it('should delete user and make sure user no longer exists', function(done) {
        queries.deleteUser(email, () => {
            queries.checkUserExists(email, (userExists) => {
                assert.equal(userExists, false);
                done();
            })
        })
    })
})