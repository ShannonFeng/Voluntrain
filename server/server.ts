var express = require("express");
var MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(express.static("dist/Voluntrain"));
var uri = "mongodb://testuser:Voluntrain1@voluntrain-shard-00-00-owfie.mongodb.net:27017,voluntrain-shard-00-01-owfie.mongodb.net:27017,voluntrain-shard-00-02-owfie.mongodb.net:27017/test?ssl=true&replicaSet=Voluntrain-shard-0&authSource=admin&retryWrites=true";

app.listen(3000, () => {
    console.log('Voluntrain server started on http://localhost:3000');
    MongoClient.connect(uri, function(err, client) {
      const collection = client.db("test").collection("devices");
      console.log("Connected to the cluster.");
      // perform actions on the collection object
      client.close();
    });
  });

app.get('/', function (req, res) {
    console.log("User on home route.");
    res.send("Hello");
})

app.get('/test', function (req, res) {
  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Voluntrain");
    dbo.collection("Events").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
})

app.get('/test/:eventName', function (req, res) {
  console.log(req.params.eventName);
  res.send("you are on the /test/eventname route")
  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Voluntrain");
    /*
    dbo.collection("Events").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
    */
  });
})