var mongoose = require('mongoose')
var dbPerson  = require('./models/person')
mongoose.connect('mongodb://localhost/sample',()=>{
    console.log("database Connected")
})

var add = {
    line1: 'dsh',
    line2: 'dfhfh',
    city: 'dhhj',
    state: 'sjfscg',
    pincode: 220122
}
var newPerson = new dbPerson({
    name: 'Salman',
    age: 23,
    dateOfBirth: "1994-02-05T12:28:22.179Z",
    address: [add,{
        line1: 'dfv',
        line2: 'ghjg',
        city: 'aesdf',
        state: 'hgfcvx',
        pincode: 5555552
    }],
    'height.heightIncm': 175,
    'height.heightinInch': 55,
/**
 * height: {
 *  heightIncm: 55,
 *  heightinInch: 55
 * }
 */
})

// newPerson.save((err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('data saved')
//     }
// })

dbPerson.find({}, (err, data)=>{
    if(err){
        console.log(err)
    }else if(data.length==0|| data==null){
        console.log('no data')
    }else{
       
        console.log(data)
    }
})

