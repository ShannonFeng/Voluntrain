var MongoClient = require('mongodb').MongoClient;
var config = require('./config.ts');
var bcrypt = require('bcrypt');

var saltRounds = 10;
var connected;
var db;
var dbName = "Voluntrain";  // default

function setDbname(dbName) {
    this.dbName = dbName;
}

// Connects to the Voluntrain database if not connected already, then calls the callback function
function connectToDb(callback) {
    if (!connected) {
        MongoClient.connect(config.dbUri, { useNewUrlParser: true }, function(err, client) {
            if (err) throw err;
            db = client.db(dbName);
            connected = true;
            callback();
        });
    }
    else {
        callback();
    }
}

module.exports.searchEvents = function(input, callback) {
    connectToDb(() => {
        var query = { event_name: { $regex: input, $options: 'i' } }    // 'i' option means case insensitive
        db.collection("Events").find(query).toArray((err, results) => {
            if (err) throw err;
            callback(results);
        });
    }) 
}

// Inserts a new user into db
module.exports.createNewUser = function(userInfo, callback) {
    // encrypt the password before inserting into db
    var typedPassword = userInfo.password;
    this.encryptPassword(typedPassword, (result) => {
        userInfo.password = result;
    })
    connectToDb(() => {
        db.collection("Users").insertOne(userInfo, function(err, result) {
            if (err) throw err;
            callback();
        });
    })
}

// Deletes (only one instance of) the user with the specified email
module.exports.deleteUser = function(email, callback) {
    var query = { email: email };
    connectToDb(() => {
        db.collection("Users").deleteOne(query, (err, result) => {
            if (err) throw err;
            callback(result);
        }) 
    })
}

// Returns true if user exists, false otherwise
module.exports.checkUserExists = function(email, callback) {
    var query = { email: email };
    connectToDb(() => {
        db.collection("Users").find(query).toArray((err, result) => {
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

// Encrypts the given password and returns the result to the callback function
module.exports.encryptPassword = function(typedPassword, callback) {
    let encryptedPassword = bcrypt.hashSync(typedPassword, saltRounds); 
    callback(encryptedPassword);
}

// Returns true if passwords match, false otherwise
module.exports.checkPasswordsMatch = function(typedPassword, actualPassword, callback) { 
    callback(bcrypt.compareSync(typedPassword, actualPassword));
}

// Retrieves the (bcrypted) password of the user with the specified email
module.exports.getUserPassword = function(email, callback) {
    var query = { email: email };
    connectToDb(() => {
        db.collection("Users").find(query).limit(1).toArray((err, result) => {
            if (err) throw err;
            callback(result[0]['password']);
        });
    })
}

// Retrieves the user's information (except password) and returns JSON object containing info
module.exports.getUserInfo = function(email, callback) {
    var query = { email: email };
    connectToDb(() => {
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
    connectToDb(() => {
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
    connectToDb(() => {
        db.collection("Organizations").insertOne(orgInfo, function(err, result) {
            if (err) throw err;
            callback();
        });
    })
}

// Returns all information about the org with specified orgName
module.exports.getOrgInfo = function(orgName, callback) {
    var query = { name: orgName };
    connectToDb(() => {
        db.collection("Organizations").find(query).limit(1).toArray((err, result) => {
            if (err) throw err;
            callback(result[0]);
        }) 
    })
}

// Deletes (only one instance of) the organization with the specified name
module.exports.deleteOrg = function(orgName, callback) {
    var query = { name: orgName };
    connectToDb(() => {
        db.collection("Organizations").deleteOne(query, (err, result) => {
            if (err) throw err;
            callback(result);
        }) 
    })
}
