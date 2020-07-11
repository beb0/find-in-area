var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeoSchema = new Schema({
    name : {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        required: [true, 'Coordinates is required'],
        index:"2dsphere"
    }
})

var PersonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    gender: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry : GeoSchema
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;

