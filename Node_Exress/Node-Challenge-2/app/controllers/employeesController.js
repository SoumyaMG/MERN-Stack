const Employee = require('../models/employees')

module.exports.list = (req, res) => {
    Employee.find()
        .then((employees) => {
            res.json(employees)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const employee = new Employee({
        name: data.name, details: { city: data.city, state: data.state }, education: [...data.education]
    })
    employee.save()
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}