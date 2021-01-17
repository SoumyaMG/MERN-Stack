const n1 = '10'
const n2 = 20
const n3 = '13.5'

console.log(n1 + n2) //1020

//type conversion
//string to convert to number
console.log(parseInt(n1) + n2)    // 30
console.log(parseInt(n3))   //13
console.log(parseFloat(n3)) //13.5

console.log(Number(n1)) //10
console.log(Number(n3)) //13.5

//Number to string 
console.log(String(n2)) //'20'
console.log('' + n2)  //' 20'
