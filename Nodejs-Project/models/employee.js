const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name: {type: String},
    designation: {type: String},
    salary :{ type: String},
    date: {type: Date},
    type: {type:String}
});

module.exports = {
    Employee: Employee
};