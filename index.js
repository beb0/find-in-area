var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app1')
mongoose.Promise = global.Promise

var app = express();
const PORT = 8080;

//.use executes the middlewere (in this it executes then attach it to the request object)
app.use(bodyParser.json())
app.use('/api', require('./routes/api'))

app.listen(PORT)

app.get('/', function (req, res) {
    res.send("foo")
})