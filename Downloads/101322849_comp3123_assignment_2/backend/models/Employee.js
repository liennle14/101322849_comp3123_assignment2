let mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
})

const Employee  = mongoose.model("employees", EmployeeSchema)
module.exports = Employee