var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    }
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;

