function connect() {
    const props = { city: 'bangalore' }

    return function (obj) {
        return Object.assign(obj, props)
    }
}

console.log(connect()({ name: 'arjun' }))