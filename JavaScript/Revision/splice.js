

console.log(Math.PI)
console.log(Math.pow(2,3))
console.log(Math.sqrt(8))

let word="Soumya"
let sentence=" word is a word"

console.log(word.toLocaleLowerCase())
console.log(word.toLocaleUpperCase())
console.log(sentence.indexOf('word'))
console.log(sentence.lastIndexOf('word'))
console.log(word.search('m')) // only works for string
console.log(word.includes('y'))
console.log([10,30,20].includes([20]))

console.log(word.slice(1))
console.log(word.slice(1,4))
console.log([10,20,30,40,50].slice(1,3))
console.log(word.substr(1,4))
console.log(word.substring(1,4))
console.log(word.split(''))
console.log([10,20,30,40].splice(1,1))
console.log([10,20,30,40].reverse())
console.log([10,50,30,40].sort())
console.log([10,50,30,40].join('-'))