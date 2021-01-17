const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/Node-Challenge-2', { useNewUrlParser: true })
    .then(() => {
        console.log('connection to database established')
    })
    .catch((err) => {
        console.log('error in connecting to DB', err)
    })

module.exports = mongoose