var express = require("express");
var MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(express.static("dist/Voluntrain"));

app.listen(3000, () => {
    console.log('Voluntrain server started on http://localhost:3000');
    
    var uri = "mongodb://testuser:Voluntrain1@voluntrain-shard-00-00-owfie.mongodb.net:27017,voluntrain-shard-00-01-owfie.mongodb.net:27017,voluntrain-shard-00-02-owfie.mongodb.net:27017/test?ssl=true&replicaSet=Voluntrain-shard-0&authSource=admin&retryWrites=true";
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