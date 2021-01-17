//object
const person={
    name:'Arjun',
    city:'Bangalore'
}
//es5
const name=person.name
//const fname=person.name  //to give your own variable name
const state=person.state //undefined, so to set default value
const state=person.state|| 'karnataka'
const city=person.city

//es6
const {name,city,state}=person  //sate is undefined, so to set defalut value
//const {name,city,state='Karnataka'}=person
const {name:fname}=person   //setting alias name
console.log(name,city)
console.log(state) 



//array destructuring
const fruits=['apple','mango','water Melon']

//we want all elements in seperate variables
//es5
const f1=fruits[0]
const f2=fruits[1]
const f3=fruits[2]
//const f4= fruits[97]

//es6
//all 3 fruits are available in 3 variables
const [f1,f2,f3]=fruits
console.log(f1,f2,f3)

//get arr ele in 1st position
const [,a1]=fruits
console.log(a1)
//to get 97th element of an array
//const [,,,,,,,,,,,97times,,,,a1]//not feasible, so use es5