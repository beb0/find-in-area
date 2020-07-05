var express = require('express');

var app = express();

app.listen(process.env.port || 8080, ()=>{
        console.log("Listening ... ")
});

//we need to either send a response or end a response
//get('/' means "when you recieve a get request to '/' we fire this function"
app.get('/', function(req, res) {
    console.log("GET req")
    res.end()
})
