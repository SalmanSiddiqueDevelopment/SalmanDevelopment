// var mongoose = require('mongoose')
// var EmpRecord = require('./Model/Empployee')

// mongoose.connect('mongodb://localhost/sample', (err,data) => {
//     if(err)
//     console.log(err)
//     else
//     console.log("successfully connected to db")
// }
// )

// var addaddress = {
//     House_No: '8/4191',
//     Lane_No: '3',
//     City: 'Saharanpur',
//     Pin: 247001
// }
// var EmpRecords = new EmpRecord
//     ({
//         E_Name: 'Salman',
//         E_Dob: "1994-02-05T12:28:22.179Z",
//         Department: 'IT',
//         Profile: 'Software Develpment',
//         mobile_no: 9627102872,
//         email: 'salmansiddique.7@gmail.com',
//         address:
//             [{
//                 House_No: 12,
//                 Lane_No: 3,
//                 City: 'Gurugram',
//                 Pin: 202001
//             }]
//     })

// //var updatedata=`{E_Name:'Salman Siddique'},{}`
// // EmpRecord.update({ _id: '5a843012ad5caf1da0e89047' }, { $set: { E_Name: 'Salman Siddique' } }, (err, data) => {
// //     if (err)
// //         console.log(err)
// //     else {
// //         console.log('succesfully find data')
// //         console.log(data)
// //     }
// //})

// EmpRecord.find((err, data) => {
//     if (err)
//         console.log(err)
//     else {
//         console.log('succesfully find data')
//         console.log(data)
//     }
// })

////////////////////14feb///////////////////////////////////////////////
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/class', (err, data) => {
    if (err) {
        console.log(err)
        console.log("Error in database connection")
    } else {
        console.log("Database connected")
    }
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var dbCity = require('./models/city')

app.post('/addCity', (req, res) => {
    if (!req.body.name || !req.body.state) {
        res.json({
            success: false,
            msg: "All details not entered"
        })
    } else {
        var newSchools = {
            name: "djkgsh",
            phoneNo: 5656565695,
            address: {
                line1: "dsjgj",
                line2: "dklhkhd",
                pincode: 564665
            }
        }
        var newCity = new dbCity({
            name: req.body.name,
            state: req.body.state,
            details: {
                mla: req.body.mla
            },
            'details.minister': req.body.minister,
            schools: [newSchools]
        })
        newCity.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Database error"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data saved",
                    data: data
                })
            }
        })
    }
})


// app.get('/getCity', (req, res) => {
//     dbCity.find({}, (err, data) => {
//         if (err) {
//             res.json({
//                 success: true
//             })
//         } else {

//             res.json({
//                 success: true,
//                 msg: "Data found",
//                 data: data
//             })
//         }
//     })
// })

app.listen(4000, () => {
    console.log("Server started at port 4000")
})