const city='bangalore'

console.log(city.length) // 9
console.log(city.toUpperCase()) //BANGALORE

const password='secret123'

if(password.length>8)
{
    console.log('strong Password')
}
else
{
    console.log('password needs to be more than 8 charecters')
}

const firstName='Ramesh KUMAR'
console.log(firstName.toUpperCase())  //RAMESH KUMAR
console.log(firstName.toLowerCase())  //ramesh kumar
console.log(city.slice(0,3)) //'ban'
console.log(city.slice(4)) //'alore'


//to capitalize

const employee='arjun' //Arjun

console.log(employee[0].toUpperCase()+employee.slice(1).toLocaleLowerCase())

console.log(employee.charAt(0).toUpperCase()+employee.slice(1).toLocaleLowerCase())



const emails='1@gamil.com,2@gmail.com,3@gmail.com'
console.log(emails.split(', '))   // ['1@gmail.com', '2@gmail.com', '3@gmail.com']
console.log(emails.split('-'))  //['1@gamil.com,2@gmail.com,3@gmail.com']

console.log(employee.split(''))    //['a','r','j','u','n']

