const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('checkUserExistsTest', function() {
    var name;
    var email;
    var zipcode;
    var password;
    var newUserInfo;
    // before test, first create a test user
    before(function(done) {
        name = "Test User"; 
        email = "checkUserExistsTest@test.com";
        zipcode = "88888"; 
        password = "testuserpassword%%^^11";
        
        newUserInfo = { name: name, email: email, zipcode: zipcode, password: password };
        queries.createNewUser(newUserInfo, () => { 
            done();
        });
    })
    it('should return true that user exists', function(done) {
        queries.checkUserExists(email, (result) => {
            assert.equal(result, true);
            done();
        })
    })
    it('should return false since user email should not exist', function(done) {
        queries.checkUserExists("incorrectEmail@soWrong.com", (result) => {
            assert.equal(result, false);
            done();
        })
    })
    // after test, delete the user from db
    after(function(done) {
        queries.deleteUser(email, () => {
            done();
        });
    })
})