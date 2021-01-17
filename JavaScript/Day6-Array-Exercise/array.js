//concat method and fill method

const number=[10]
console.log(number)   //[10]

//fill
const prices=new Array(1)
console.log(prices) // <1 empty item>
prices.fill(10)
console.log(prices)  //[10]

//concat
const a=[10]
const b=[20]
console.log(a+b) //'1020'
let c=(a.concat(b)) //[10,20]
console.log(c.concat(30))  //[10,20,30]

