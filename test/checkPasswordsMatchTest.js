const assert = require('chai').assert;
const queries = require('../server/queries.ts');

describe('checkPasswordsMatchTest', function() {
    var name;
    var email;
    var zipcode;
    var password;
    var newUserInfo;
    // before test, first create a test user
    before(function(done) {
        name = "Test User"; 
        email = "checkPasswordsMatchTest@test.com";
        zipcode = "99999"; 
        password = "testuserpassword%%^^11";
        
        newUserInfo = { name: name, email: email, zipcode: zipcode, password: password };
        queries.createNewUser(newUserInfo, () => { 
            done();
        });
    })
    it('should return true that the passwords match', function(done) {
        queries.getUserPassword(email, (actualPassword) => {
            queries.checkPasswordsMatch(password, actualPassword, (result) => {
                assert.equal(result, true);
                done();
            })
        })
    })
    it('should return false since passwords do not match', function(done) {
        var incorrectPassword = "testuserpassword%%^^22";
        queries.getUserPassword(email, (actualPassword) => {
            queries.checkPasswordsMatch(incorrectPassword, actualPassword, (result) => {
                assert.equal(result, false);
                done();
            })
        })
    })
    // after test, delete the test user from db
    after(function(done) {
        queries.deleteUser(email, () => { 
            done();
        });
    })
})