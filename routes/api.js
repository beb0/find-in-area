var express = require('express')
var router = express.Router()
var Person = require('../models/person')

//Read a list of points
router.get('/point', function (req, res) {
    res.send({type:'GET'})
})

//Create a new point
router.post('/point', function (req, res, next) {
   // return a Promise, if fullfilled, returns the value if not returns error
    Person.create(req.body).then(function (person) {
        res.send(person)
    }).catch(next);
})

//Update an existing point
router.put('/point/:id', function (req, res) {
    //console.log(req.params.id)
    res.send({type:'PUT'})
})

//Delete a Point
router.delete('/point/:id', function (req, res) {
    res.send({type:'DELETE'})
})

module.exports = router