var express = require('express');

var app = express();
const PORT = 8080;

app.listen(process.env.port || PORT, ()=>{
        console.log("Listening... ")
});

app.get('/', function (req, res) {
    res.send("foo")
})