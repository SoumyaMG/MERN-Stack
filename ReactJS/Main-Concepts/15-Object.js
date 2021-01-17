const person =
{
    name: 'Virat',
    type: 'batsman'

}

const personUpdate =
{
    name: 'Sachin',
    country: 'India'
}

console.log(Object.assign(person, personUpdate))// update the existing object
console.log(person)//updated the object

console.log(Object.assign({}, person, personUpdate)) // creates the new object  (this is how react works)
//console.log(Object.assign({ ...person }, ...personUpdate })//
console.log(person)//original object remains the same

