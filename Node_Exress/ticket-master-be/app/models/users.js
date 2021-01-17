const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 128
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:
        {
            validator: function (value) {
                return validator.isEmail(value)
            },
            message: function () {
                return { note: 'invalid email format' }
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt:
            {
                type: Date,
                default: Date.now()
            }
        }
    ]
})

//pre hook--- for encrypting the password
userSchema.pre('save', function (next) {
    const user = this
    if (user.isNew) {
        bcryptjs.genSalt(10)
            .then(function (salt) {
                bcryptjs.hash(user.password, salt)
                    .then(function (encryptedPassword) {
                        user.password = encryptedPassword
                        next()
                    })
            })
    }
    else {
        next()
    }
})

//our own static method to find the user by his credentials
userSchema.statics.findByCredentials = function (email, password) {
    const User = this
    return User.findOne({ email })
        .then(function (user) {
            if (!user) {
                return Promise.reject('invalid email/password')
            }
            return bcryptjs.compare(password, user.password)
                .then(function (result) {
                    if (result) {
                        return Promise.resolve(user)
                    }
                    else {
                        return Promise.reject('invalid email/password')
                    }
                })
        })
        .catch(function (err) {
            return Promise.reject(err)
        })
}


//defining our own instance method
userSchema.methods.generateToken = function () {
    const user = this
    const tokenData = {
        _id: user._id,
        username: user.name,
        createdAt: Number(new Date())
    }
    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({ token })
    return user.save()
        .then(function (user) {
            return Promise.resolve(token)
        })
        .catch(function (err) {
            return Promise.reject(err)
        })

}

//for verifying the token

userSchema.statics.findByToken = function (token) {
    const User = this
    let tokenData
    try {
        tokenData = jwt.verify(token, 'jwt@123')
    }
    catch (err) {
        return Promise.reject(err)
    }

    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })
}

const User = mongoose.model('User', userSchema)

module.exports = User