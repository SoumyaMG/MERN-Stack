//import React from 'react'- react uses es6 module loader
const http = require('http')  // node express uses - commonjs module loader
const port = 3005
const server = http.createServer(function (request, response) {
    if (request.url == '/') {
        response.end('Hey Hello !!! Welcome to Home Page')  //text
    }
    else if (request.url == '/about') {
        response.end('About us page')
    }
    else if (request.url == '/users') {
        const users = [{ id: 1, name: 'Arjun' }, { id: 2, name: 'Mani' }]
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(users))
    }
    else if (request.url == '/services') {
        const html = '<h2>Listing Services</h2> <ul><li>Service 1</li><li>Service 2</li><li>Service 3</li></ul>'
        response.setHeader('Content-Type', 'text/html')
        response.end(html)
    }
})

server.listen(port, function () {
    console.log('listening to port', port)
})

