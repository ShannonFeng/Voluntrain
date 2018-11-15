var MongoClient = require('mongodb').MongoClient;
var config = require('./config.ts');
var bcrypt = require('bcrypt');

var connected;
var db;

// Connects to the Voluntrain database if not connected already, then calls the callback function
function connectToDb(callback) {
    if (!connected) {
        MongoClient.connect(config.dbUri, { useNewUrlParser: true }, function(err, client) {
            if (err) throw err;
            db = client.db("Voluntrain");
            connected = true;
            callback();
        });
    }
    else {
        callback();
    }
}

// Returns true if user exists, false otherwise
module.exports.checkUserExists = function(email, callback) {
    var query = { email: email };
    connectToDb(done => {
        db.collection("Users").find(query).limit(1).toArray((err, result) => {
            if (err) throw err;
            // if no user found
            else if (result.length == 0) {
                callback(false);
            }
            else {
                callback(true);
            } 
        });
    });
};

// Returns true is passwords match, false otherwise
module.exports.checkPasswordsMatch = function(typedPassword, actualPassword, callback) { 
    callback(bcrypt.compareSync(typedPassword, actualPassword));
}

// Retrieves the (bcrypted) password of the user with the specified email
module.exports.getUserPassword = function(email, callback) {
    var query = { email: email };
    connectToDb(done => {
        db.collection("Users").find(query).limit(1).toArray((err, result) => {
            if (err) throw err;
            callback(result[0]['password']);
        });
    })
}

// Retrieves all the user's information (except password) and returns JSON object containing info
module.exports.getAllUserInfo = function(email, callback) {
    var query = { email: email };
    connectToDb(done => {
        db.collection("Users").find(query).limit(1).toArray((err, result) => {
            if (err) throw err;
            var info = {
                name: result[0].name,
                email: result[0].email,
                zipcode: result[0].zipcode
            };
            callback(info);
        });
    })
}

// Returns true if organization exists, false otherwise
module.exports.checkOrgExists = function(orgName, callback) {
    var query = { name: orgName };
    connectToDb(done => {
        db.collection("Organizations").find(query).limit(1).toArray(function(err, result) {
            if (err) throw err;
            // if duplicate org name found
            else if (result.length > 0) {
              callback(true);
            }
            else {
              callback(false);
            }
        })
    });
};

// Inserts a new organization into db
module.exports.createNewOrg = function(orgInfo, callback) {
    connectToDb(done => {
        db.collection("Organizations").insertOne(orgInfo, function(err, result) {
            if (err) throw err;
            callback();
        });
    })
}

// Returns all information about the org with specified orgName
module.exports.getOrgInfo = function(orgName, callback) {
    var query = { name: orgName };
    connectToDb(done => {
        db.collection("Organizations").find(query).limit(1).toArray((err, result) => {
            if (err) throw err;
            callback(result[0]);
        }) 
    })
}

// Deletes (only one instance of) the organization with the specified name
module.exports.deleteOrg = function(orgName, callback) {
    var query = { name: orgName };
    connectToDb(done => {
        db.collection("Organizations").deleteOne(query).toArray((err, result) => {
            if (err) throw err;
            callback(result[0]);
        }) 
    })
}
