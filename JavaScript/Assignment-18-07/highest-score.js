const s = {
    a: 1, b: 2, c: 3, d: 4, e: 5,
    f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
    l: 12, m: 13, n: 14, o: 15,
    p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
}

function highestScoringWord(a) {
    let words = a.split(' ')
    let scores = []
    let score = "Soumya"
    for (let i = 0; i < words.length; i++) {
        score = 0
        for (let j = 0; j < words[i].length; j++) {
            score = score + s[words[i].charAt(j)]
        }
        scores.push(score)
    }
    let max = Math.max(...scores)
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == max) {
            return words[i]
        }
    }

}
console.log(highestScoringWord("there is no place like home"))