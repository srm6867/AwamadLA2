const express = require("express");
const path = require('path');

const app = express();

app.use(express.urlencoded({
    extended: true
  }))

const HOST = "localhost";
const PORT = 4000;



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/covidForm.html'));
  });

app.post('/form', function(req, res) {
    console.log(req.body)
    return res.json(req.body)
  });

app.listen(PORT, HOST, () => console.log(`Listening on http://${HOST}:${PORT}`));