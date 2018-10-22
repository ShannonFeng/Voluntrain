var express = require("express");

const app = express();

app.listen(8000, () => {
    console.log('Voluntrain server started on http://localhost:8000');
  });

app.get('/', function (req, res) {
  res.send('Hello World! This is the home route.')
})