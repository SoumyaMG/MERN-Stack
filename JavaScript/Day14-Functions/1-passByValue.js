//primitive data types are pass by value

const number=10
const city='Bangalore'

function change(number,city)
{
    number=20
    city='mysore'
    console.log('inside function ',number,city)
}

console.log('Before calling function',number,city)
change(number,city)
console.log('outside the function ',number,city)