const express = require('express')
const mongoose = require('./config/database')
const routes = require('./config/routes')
const port = 3005
const app = express()

app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
    console.log('listening to the port...', port)
})