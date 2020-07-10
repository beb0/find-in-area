var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app1', { useUnifiedTopology: true,  useNewUrlParser: true } )


var app = express();
const PORT = 8080;

//.use executes the middlewere (in this it executes then attach it to the request object)
app.use(bodyParser.json())
app.use('/api', require('./routes/api'))

app.use(function (err, req, res, next) {
    res.status(422).send({error: err.message})
})

app.listen(PORT, function () {
    console.log("Listening to reqs...")
})

app.get('/', function (req, res) {
    res.send("foo")
})