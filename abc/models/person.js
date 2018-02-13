var mongoose = require('mongoose')
var Schema = mongoose.Schema

var person = new Schema({
    name: String,
    fatherName: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    dateOfBirth: Date,
    address: [{
        line1: String,
        line2: String,
        city: String,
        state: String,
        pincode: Number
    }],
    height: {
        heightIncm : Number,
        heightinInch: Number
    }

})

module.exports = mongoose.model('person',person)