const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        require: true,
        unique: true,
        //how to add custome validation
        validate: {
            validator: function (value) {
                return validator.isEmail(value)
            },
            message: function () {
                return 'invalid email format'
            }
        }
    },
    password:
    {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128
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

//pre hooks
userSchema.pre('save', function (next) {
    const user = this
    if (user.isNew) {
        bcryptjs.genSalt(10)
            .then((salt) => {
                bcryptjs.hash(user.password, salt)
                    .then((encryptedPassword) => {
                        user.password = encryptedPassword
                        next()
                    })
            })
    }
    else {
        next()
    }

})

//own instance method
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
        .then((user) => {
            return Promise.resolve(token)
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

//own static method
userSchema.statics.findByCredentials = function (email, password) {
    const User = this  //refers to current user
    return User.findOne({ email })
        .then((user) => {
            if (!user) {
                return Promise.reject('invalid email')
            }
            return bcryptjs.compare(password, user.password)
                .then((result) => {
                    if (result) {
                        return Promise.resolve(user)
                    }
                    else {
                        return Promise.reject('invalid password')
                    }
                })
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

//own static menthod---- to verify jwt
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

module.exports = {
    User
}