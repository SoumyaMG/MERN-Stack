const express = require('express')
const bcryptjs = require('bcryptjs')
const router = express.Router()
const { User } = require('../models/User')
const { authenticateUser } = require('../middlewares/authenticate')

//localhost:3005/users/register
router.post('/register', function (req, res) {
    const body = req.body
    const user = new User(body)
    console.log(user.isNew)
    user.save()
        .then((user) => {
            console.log(user.isNew)
            res.send(user)
        })
        .catch((err) => {
            res.send(err)
        })
})

//localhost:3005/users/login
router.post('/login', function (req, res) {
    const body = req.body

    User.findByCredentials(body.email, body.password)
        .then((user) => {
            return user.generateToken()
        })
        .then((token) => {
            res.setHeader('x-auth', token).send({})
        })
        .catch((err) => {
            res.send(err)
        })
})

//localhost:3005/users/accounts  ---- setting up private route
router.get('/accounts', authenticateUser, function (req, res) {
    const { user } = req
    res.send(user)
})

//localhost:3005/users/logout
router.delete('/logout', authenticateUser, function (req, res) {
    const { user, token } = req
    User.findByIdAndUpdate(user.__id, { $pull: { tokens: { token: token } } })
        .then(() => {
            res.send({ notice: 'successfully logged out' })
        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = {
    usersRouter: router
}