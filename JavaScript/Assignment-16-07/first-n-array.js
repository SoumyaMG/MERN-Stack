function firstElements(a, b) {
    let arr = []
    if (a.length == 0) {
        return arr
    }
    else if (b > a.length) {
        return a
    }
    else if (b < 0) {
        return a
    }
    else if (b == undefined) {
        return a[0]
    }
    for (let i = 0; i < b; i++) {
        arr.push(a[i])
    }
    return arr
}
console.log(firstElements([7, 9, 0, -2]))
console.log(firstElements([], 3))
console.log(firstElements([7, 9, 0, -2], 3))
console.log(firstElements([7, 9, 0, -2], 6))
console.log(firstElements([7, 9, 0, -2], -3))