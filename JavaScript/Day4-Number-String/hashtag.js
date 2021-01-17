const str = 'make in india'

function tagGenerator(str) {
    let words = str.split(' ')
    let output = '#'
    for (let i = 0; i < words.length; i++) {
        const capitalWords = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
        output = output + capitalWords;
    }
    return output
}

console.log(tagGenerator(str))
console.log(tagGenerator('js is awesome'))