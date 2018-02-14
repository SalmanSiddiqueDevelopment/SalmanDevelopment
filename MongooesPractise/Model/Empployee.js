
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Empployee = new Schema
({
   E_Name:String,
   E_Dob: Date,
   Department: String,
   Profile: String, 
   mobile_no:Number,
   email:String,
   address: 
   [{
   House_No:String,
   Lane_No:String,
   City:String,
   Pin:Number
    }]
})

module.exports =mongoose.model('EmployeeRecord',Empployee)