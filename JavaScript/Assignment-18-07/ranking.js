function rankings(a) {
    var sorted = a.slice().sort(function (a, b) { return b - a })
    let rank = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < sorted.length; j++) {
            if (a[i] == sorted[j]) {
                rank.push(j + 1)
            }
        }

    }
    //var ranks = a.slice().map(function (v) { return sorted.indexOf(v) + 1 });
    return rank
}

console.log(rankings([6, 8, 1, 12, 4, 3, 9]))