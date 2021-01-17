const person=['sachin','tendilkar','ramesh',200,15000,26.8]
//an array is ordered,number indexed,collection of values

//an object is unordered,string indexed,collection of values
const player={
    //key (property):value 
    fname:'Sachin',
    lname:'tendulkar',
    'bat ingavg':26.8     // incase if you want to have space in property name 
}

//accessing property of an object
console.log(player.fname) //'sachin
console.log(player['lname']) //'tecndulakr'  bcz object is string indexed

//accessing a prop that do not exist
console.log(player.country) //undefined

//how to add key:value pairs or
//how to add property to an object

player.country='INDIA'
//imp
player['State']='Maharashtra'
console.log(player)             //{ fname: 'Sachin',lname: 'tendulkar','bat ingavg': 26.8,country: 'INDIA',State: 'Maharashtra' }

// how to remove a property from an object
delete player['bat ingavg']
console.log(player)

//how to update prop value
player.fname='SACHIN'
console.log(player)    //{ fname: 'SACHIN',lname: 'tendulkar',country: 'INDIA',State: 'Maharashtra' }

//how to determine all the keys or prop
console.log(Object.keys(player)) //[ 'fname', 'lname','country', 'State' ]

//how to determine all the values 
console.log(Object.values(player))  //[ 'SACHIN', 'tendulkar', 'INDIA', 'Maharashtra' ]

//how to determine the length of an object
console.log(Object.keys(player).length)   //4

//how to check if the propeerty exists or not 
console.log(player.isCaptain) // if it is presenyt it returns value else returns undefined
console.log(player.hasOwnProperty('country')) //true
console.log(Object.keys(player).includes('country')) //true

//if property value is assigned to a variable then to access that property we MUST use []
var prop='country'
console.log(player[prop]) // INDIA  ===player['country']
console.log(player.prop)   //undefined

//loop over an object
console.log(player)
for(let key in player)
{
    console.log(key,player[key])  //fname SACHIN lname tendulkar country INDIA State Maharashtra
}