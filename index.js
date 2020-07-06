var express = require('express');

var app = express();
const PORT = 8080;

app.use('/api', require('./routes/api'))

app.listen(PORT)

app.get('/', function (req, res) {
    res.send("foo")
})