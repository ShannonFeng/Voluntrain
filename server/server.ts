const config = require('./config.ts');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt'); 
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

app.get('/api/test', function (req, res) {
    res.send("The test route works.");
})

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
    var newOrg = {
      name: req.body.name, 
      location: req.body.location, 
      zipcode: req.body.zipcode, 
      bio: req.body.bio 
    }
    var query = {name: req.body.name};

    db.collection("Organizations").find(query).limit(1).toArray(function(err, result) {
      if (err) throw err;
      // if duplicate org name found
      else if (result.length > 0) {
        console.log("Organization already found in database.");
        res.json({
          success: false,
          message: "Unable to create organization. Organization name already exists."
        });
      }
      else {
        db.collection("Organizations").insertOne(newOrg , function(err, result) {
          if (err) throw err;
          console.log("Successfully added organization to database.");
          res.json({
            success: true,
            message: "Successfully created organization."
          });
        });
      }
    })
})

app.post('/api/login', async (req, res) => {
    var query = { 
      email: req.body.email,
    };

    db.collection("Users").find(query).limit(1).toArray(function(err, result) {
      if (err) throw err;
      // if no user found
      else if (result.length == 0) {
        console.log("User credentials not found in database.");
        res.json({
            success: false,
            message: "User credentials not found in database."
        })
      }
      else {
        console.log(result)
        if (bcrypt.compareSync(req.body.password, result[0]['password'])) {
            console.log("Successfully logged user in.");
            // Get information about the user from db result and store in session information
            req.session.email = result[0].email;
            req.session.save();

            res.json({
              success: true,
            })
        } else {
            console.log("Incorrect password");
            res.json({
            success: false,
            message: "Incorrect password"
            })
        }
      }
  })
})

app.get('/api/userdata', (req, res) => {
    var query = {email: req.session.email};
    db.collection("Users").find(query).limit(1).toArray((err, result) => {
      if (err) throw err;
      // if no user found using session email info, then no user is currently logged in
      if (result.length == 0) {
        res.json({
            isLoggedIn: false
        })
      }
      // otherwise return information about the currently logged in user 
      else {
        res.json({
            isLoggedIn: true,
            name: result[0].name,
            email: result[0].email,
            zip: result[0].zipcode
        })
      }
    })
})

app.post('/api/logout', (req, res) => { 
    console.log("Successfully logged out user.");
    // End the user session
    req.session.destroy();
    res.json({success: true});
})
