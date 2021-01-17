const fruits=['apple','mango']

function fruit(fruits,fruit)
{
    fruits.push(fruit)
    console.log('inside the function ',fruits)
}

console.log('before calling the function ',fruits)
fruit(fruits,'Water Melon')
console.log('outside the function ',fruits)

const person=
{
    name:'Sachin',
    city:'Mumbai'
}
function changeMe(person)
{
    person.city='Bangalore'
    console.log('inside the function ',person.name,person.city)
}
console.log('Before changing ',person.name,person.city)
changeMe(person)
console.log('outside the function ',person.name,person.city)