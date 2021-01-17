const number=[10,20,30]
console.log(typeof number) //object
console.log(Array.isArray(number)) //true

const person=
{
    name: 'ravi'
}

console.log(typeof person) //'object'
console.log(Array.isArray(person)) //false

const fruits=['mango']

//mutable methods - that changes the original state of an arrray
//add element to the end of the array
console.log(fruits.push('watermelon'))  //2
console.log(fruits)

//add element to the beginning of an array
console.log(fruits.unshift('apple'))
console.log(fruits)

//remove element from the end of an array
console.log(fruits.pop())
console.log(fruits)

//remove element from beginning of an array
console.log(fruits.shift())
console.log(fruits)

const players=['virat','dhoni','sachin']

console.log(players)
//add elements at certain indexes


players.splice(2,0,'rahul') // 2- start index , 0- no of elements to delete, rahul- element to be added //returns empty array
console.log(players)

//remove eleme nts from index
players.splice(1,1)
console.log(players)

console.log(players.slice(1)) // slice works for both array and string
