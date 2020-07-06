var express = require('express')
var router = express.Router()

router.get('/point', function (req, res) {
    res.send({type:'GET'})
})

router.post('/point', function (req, res) {
    res.send({type:'POST'})
})

router.put('/point/:id', function (req, res) {
    res.send({type:'PUT'})
})

router.delete('/point/:id', function (req, res) {
    res.send({type:'DELETE'})
})

module.exports = router