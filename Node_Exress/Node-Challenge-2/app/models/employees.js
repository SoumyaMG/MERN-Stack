const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    details: {
        city: {
            type: String
        },
        state: {
            type: String
        }
    },
    education: [
        {
            name: String,
            institution: String,
            YOP: String
        }
    ]
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee