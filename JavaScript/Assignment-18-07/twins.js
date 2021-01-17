function findTwins(a) {
    if (a.length == 0) {
        return null
    }
    let count
    for (let i = 0; i < a.length; i++) {
        count = 0
        for (let j = 0; j < a.length; j++) {
            if (a[i] == a[j]) {
                count = count + 1
                if (count == 2) {
                    return a[i]
                }
            }
        }
    }
    if (count < 2) {
        return null
    }
}

console.log(findTwins([3, 1, 4, 2, 5]))