//in global scope this is an empty object while we are working with node 
console.log(this) //    {}

function showThis()
{
    //in node- inside a function -this refers to a global object i.e- 'global'
    console.log(this)
}

showThis()

const person={
    name:'Shivaraj',
    //within a method this keyword refers to cuurent object
    //a property whoes value is function
    greet: function()
    {
        console.log('hi', this.name)
        //if inside a method there is a function and inside that function this refers to global object
    function sayHello()
    {
        console.log(this)
    }
    sayHello()
}
}
person.greet()
//in browser--> this refers to global object--> that is window object
//in browser--> inside a function this refers to global object--> that is window object


