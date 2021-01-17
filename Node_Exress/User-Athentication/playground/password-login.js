const bcryptjs = require('bcryptjs')

const encrypted = '$2a$10$9BPpvCuQJJT06eaVvCd9SemouQ4P5OUE3Gdh0Px/uSE6/TeH8nXXW'
const password = 'secret1234'

bcryptjs.compare(password, encrypted)
    .then((result) => {
        console.log(result)
    })