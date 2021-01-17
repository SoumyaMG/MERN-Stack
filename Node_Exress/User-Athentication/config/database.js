const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/User-Athentication', { useNewUrlParser: true })
    .then(() => {
        console.log('connection to the database established...')
    })
    .catch((err) => {
        console.log('error in connecting to the database', err)
    })

module.exports = { mongoose }