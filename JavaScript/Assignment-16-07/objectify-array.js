var data = [
    ['animals',
        [
            'dogs', ['Corgi', 'Sheltie'],
            'cats', ['Tabby', 'Black'],
            'pigs', ['Teacup']
        ]
    ],
    ['guitars',
        [
            'Fender', ['Telecaster', 'Stratocaster', 'Jazzmaster'],
            'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
        ]
    ]
];

function objectify(data) {
    const obj1 = {}
    for (let i = 0; i < data.length; i++) {
        obj1[data[i][0]] = {}
        for (let k = 0; k < data[i][1].length; k++) {
            if (k % 2 == 0) {
                obj1[data[i][0]][data[i][1][k]] = data[i][1][k + 1]
            }
        }
    }
    return obj1
}
console.log(objectify(data))

/*
const obj1 = {

}

obj1[data[0][0]] = {

}


obj1[data[0][0]][data[0][1][2]] = data[0][1][3]
obj1[data[0][0]][data[0][1][4]] = data[0][1][5]

console.log(data[0])
console.log(data[0][0])
console.log(data[0][1])
console.log(data[0][1][0])
console.log(data[0][1][1])
console.log(data[0][1][2])
console.log(data[0][1][3])
console.log(data[0][1][4])
console.log(data[0][1][5])

console.log(obj1)
*/



