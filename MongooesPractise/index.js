var mongoose = require('mongoose')
var EmpRecord = require('./Model/Empployee')

mongoose.connect('mongodb://localhost/sample', (err,data) => {
    if(err)
    console.log(err)
    else
    console.log("successfully connected to db")
}
)

var addaddress = {
    House_No: '8/4191',
    Lane_No: '3',
    City: 'Saharanpur',
    Pin: 247001
}
var EmpRecords = new EmpRecord
    ({
        E_Name: 'Salman',
        E_Dob: "1994-02-05T12:28:22.179Z",
        Department: 'IT',
        Profile: 'Software Develpment',
        mobile_no: 9627102872,
        email: 'salmansiddique.7@gmail.com',
        address:
            [{
                House_No: 12,
                Lane_No: 3,
                City: 'Gurugram',
                Pin: 202001
            }]
    })

//var updatedata=`{E_Name:'Salman Siddique'},{}`
// EmpRecord.update({ _id: '5a843012ad5caf1da0e89047' }, { $set: { E_Name: 'Salman Siddique' } }, (err, data) => {
//     if (err)
//         console.log(err)
//     else {
//         console.log('succesfully find data')
//         console.log(data)
//     }
//})

EmpRecord.find((err, data) => {
    if (err)
        console.log(err)
    else {
        console.log('succesfully find data')
        console.log(data)
    }
})