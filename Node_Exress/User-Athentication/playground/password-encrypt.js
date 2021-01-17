const bcryptjs = require('bcryptjs')

const password = 'Secrete123'

bcryptjs.genSalt(10)
    .then((salt) => {
        console.log(salt)
        bcryptjs.hash(password, salt)
            .then((encryptedPassword) => {
                console.log(encryptedPassword)
            })
    })