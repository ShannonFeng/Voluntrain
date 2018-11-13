const queries = require('./queries.ts');
var config = require('./config.ts');
const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

var bcrypt = require('bcrypt'); 
const saltRounds = 10;

const uri = config.dbUri;
const portNum = config.portNum;
var db;

app.use(express.static("dist/Voluntrain"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(session({
    secret: 'VoluntrainCookie',
    saveUninitialized: false,
    resave: false
}))

// Initialize connection once
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err;
  db = client.db("Voluntrain");
  // Start the application after the database is ready
  app.listen(portNum);
  console.log("Voluntrain server stated on localhost:"+portNum);
});

app.get('/createaccount/', function (req, res) {

  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Voluntrain");

    var query = { email: req.query.email};

    dbo.collection("Users").find(query).limit(1).toArray(function(err, result) {
      if (err) {
        console.log(err);
        res.send("ERROR");
      }
      // if no user found
      else if (result.length > 0) {
        console.log("Email already found in database.");
        res.send("ERROR");
      }
      else {
        let encryptedPassword = bcrypt.hashSync(req.query.password, saltRounds); 

        var newUser = {name: req.query.name, email: req.query.email, zipcode: req.query.zipcode, password: encryptedPassword };
        
        dbo.collection("Users").insertOne(newUser , function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
      }
      db.close();
    });
    
  });
})

app.post('/api/createOrg', (req, res) => {
    var orgInfo = {
      name: req.body.name, 
      location: req.body.location, 
      zipcode: req.body.zipcode, 
      bio: req.body.bio 
    }

    var orgName = req.body.name;

    queries.checkOrgExists(orgName, function(orgExists) {
      // If organization does not exist, then create the org
      if (!orgExists) {
        // Insert the organization info into db
        queries.createNewOrg(orgInfo, done => {
          console.log("Successfully added organization to database.");
          res.json({
            success: true,
            message: "Successfully created organization."
          });
        })
      }
      // Otherwise if org already exists, return error message
      else {
        console.log("Organization already found in database.");
        res.json({
          success: false,
          message: "Unable to create organization. Organization name already exists."
        });
      }
    })
})

app.post('/api/login', (req, res) => {
  var email = req.body.email;
  var typedPassword = req.body.password;

  // First check if user email exists
  queries.checkUserExists(email, function(userExists) {
    if (userExists) {
      queries.getUserPassword(email, function(actualPassword) {
          // check if password correct
          queries.checkPasswordsMatch(typedPassword, actualPassword, function(match) {
            if (match) {
                console.log("Successfully logged user in.");
                req.session.email = email;
                req.session.save();
                res.json({
                  success: true,
                })
            }
            else {
                console.log("Incorrect password");
                res.json({
                  success: false,
                  message: "Incorrect password"
                })
            }
          })
      })
    }
    // Otherwise if user does not exist 
    else {
      console.log("User email not found in database.");
      res.json({
          success: false,
          message: "User email not found in database."
      })
    }
  });
})

app.get('/api/userdata', (req, res) => {
  var email = req.session.email;
  queries.checkUserExists(email, function(userExists) {
    // First check if users exists
    if (userExists) {
        // then get the user's information
        queries.getAllUserInfo(email, function(result) {
            res.json({
              isLoggedIn: true,
              name: result.name,
              email: result.email,
              zip: result.zipcode
            })
        })
    }
    // Otherwise if no user exists, returns json message that no user is logged in
    else {
      res.json({
        isLoggedIn: false
      })
    }
  });
})

app.post('/api/logout', (req, res) => { 
    console.log("Successfully logged out user.");
    // End the user session
    req.session.destroy();
    res.json({success: true});
})
