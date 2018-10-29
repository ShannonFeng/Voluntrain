var express = require("express");
var MongoClient = require("mongodb").MongoClient;

const app = express();

app.listen(8000, () => {
    console.log('Voluntrain server started on http://localhost:8000');
    
    var uri = "mongodb+srv://testuser:Voluntrain1@cluster0-owfie.mongodb.net/test?retryWrites=true";
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