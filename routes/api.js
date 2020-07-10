var express = require('express')
var router = express.Router()
var Person = require('../models/person')
const { findOne } = require('../models/person')

//Read a list of points
router.get('/point', function (req, res) {
    res.send({type:'GET'})
})

//Create a new point
router.post('/point', function (req, res, next) {
   // return a Promise, if fullfilled, returns the value if not returns error
    Person.create(req.body).then(function (person, err) {
        res.send(person)
    }).catch(next);
})

//Update an existing point
router.put('/point/:id', function (req, res, next) {
    //console.log(req.params.id)
    // res.send({type:'PUT'})
    Person.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Person.findOne({_id: req.params.id}).then(function(updates){
            res.send(updates)
        })
    })
})

//Delete a Point
router.delete('/point/:id', function (req, res, next) {
    Person.findByIdAndRemove({_id: req.params.id}).then(function(person){
        res.send(person)
    }) 
    // r=es.send({type:'DELETE'})
})

module.exports = router