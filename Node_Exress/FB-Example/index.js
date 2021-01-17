const express = require('express')
const port = 3005
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/students', (req, res) => {
    const students = [
        { id: 1, name: 'Mahesh' },
        { id: 2, name: 'Suresh' }
    ]
    res.json(students)
})

app.listen(port, () => {
    console.log('backend server is running on port number', port)
})