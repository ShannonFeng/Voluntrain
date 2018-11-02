var express = require("express");
var MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(express.static("dist/Voluntrain"));

var uri = "mongodb://testuser:Voluntrain1@voluntrain-shard-00-00-owfie.mongodb.net:27017,voluntrain-shard-00-01-owfie.mongodb.net:27017,voluntrain-shard-00-02-owfie.mongodb.net:27017/test?ssl=true&replicaSet=Voluntrain-shard-0&authSource=admin&retryWrites=true";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.listen(3000, () => {
    console.log('Voluntrain server started on http://localhost:3000');
    MongoClient.connect(uri, function(err, client) {
      console.log("Connected to the cluster.");
      // perform actions on the collection object
      client.close();
    });
  });

app.get('/', function (req, res) {
    console.log("User on home route.");
    res.send("Hello");
})

app.get('/createaccount/', function (req, res) {

  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Voluntrain");

    var newUser = {name: req.query.name, email: req.query.email, zipcode: req.query.zipcode, password: req.query.password };

    dbo.collection("Users").insertOne(newUser , function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
})

app.get('/login', function(req, res) {
  
  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;

    var dbo = db.db("Voluntrain");

    var query = { email: req.query.email, password: req.query.password };

    dbo.collection("Users").find(query).toArray(function(err, result) {
      if (err) {
        console.log(err);
        res.send("ERROR");
      }
      // if no user found
      else if (result.length == 0) {
        console.log("User not found in database.");
        res.send("ERROR");
      }
      else {
        console.log(result);
        res.json(result);
      }
      db.close();
    });
  });
})
