//In javascript we can create an object without the help of class independently
//method--- when a property holds a function as its value in an object it is called as method


/*const person={
    fname:'Arjun',
    lname:'Reddy',
    fullName:function()
    {
        //when prop holds a function as a value is called as method 
        return person.fname+' '+person.lname
    }
}
console.log(typeof person) //'object'
console.log(person.fname) //'Arjun'
console.log(person.lname) //'Reddy'
console.log(person.fullName())*/

//when you change the object name , you have to change the object name used throughout the code to access the properties.
//So we use this keyword to refer current object 

const person={
    fname:'Arjun',  
    lname:'Reddy',
    fullName:function()
    {
        //when prop holds a function as a value is called as method 
        return this.fname+' '+this.lname
    }
}
console.log(person)

//dynamically adding a property holding method to an object
person.greet=function(name)
{
    return 'Hello'+ ' '+name
}
console.log(person)
console.log(person.fullName())
console.log(person.greet('Soumya'))
