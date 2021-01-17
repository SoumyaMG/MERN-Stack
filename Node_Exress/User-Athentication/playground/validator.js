const validator = require('validator')

const email = "user@gmail.com"

console.log(validator.isEmail(email))