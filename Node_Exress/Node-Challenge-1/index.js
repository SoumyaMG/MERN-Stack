const express = require('express')
const app = express()
const port = 3005
const axios = require('axios')

app.use(express.json())

app.get('/users/gender', (req, res) => {
    const nam = req.query.name
    axios.get(`https://gender-api.com/get?name=${nam}&key=JjwCTxafxxPaMLMzbA`)
        .then((response) => {
            data = { 'name': response.data.name, 'gender': response.data.gender }
            res.send(data)
        })
})

app.listen(port, function () {
    console.log('Listening to the Port', port)
})
