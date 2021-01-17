const express = require('express')
const { mongoose } = require('./config/database')
const port = 3005
const app = express()

const { usersRouter } = require('./app/controllers/usersController')

app.use(express.json())
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log('listening to the port..', port)
})