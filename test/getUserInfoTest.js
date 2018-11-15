const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('getUserInfoTest', function() {
    var name;
    var email;
    var zipcode;
    var password;
    var newUserInfo;
    // before test, first create a test user
    before(function(done) {
        name = "Test User"; 
        email = "getUserInfoTest@test.com";
        zipcode = "22222"; 
        password = "testuserpassword%%^^11";
        
        newUserInfo = { name: name, email: email, zipcode: zipcode, password: password };
        queries.createNewUser(newUserInfo, () => { 
            done();
        });
    })
    it('should retreive user info and verify it is correct', function(done) {
        queries.getUserInfo(email, (userInfo) => {
            assert.equal(userInfo.name, name);
            assert.equal(userInfo.email, email);
            assert.equal(userInfo.zipcode, zipcode);
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