/* 
const person={
    name:'pavan',
    skills : ['js','rb','py'],
     details:function()
     {
         this.skills.forEach(function(skill)
         {
             console.log(this.name, ' knows ',skill)
         })
     }
     
}
person.details()*/
// In the above piece of code we are not able to refer to the current object inside a method if there is a 
//function and inside that method if we are using this it will refer to global object 

//1----------------------Approach--> Assign this to another variable inside the method and use it for refering to the current object 
/*const person={
    name:'pavan',
    skills : ['js','rb','py'],
     details:function()
     {
         let that=this
         this.skills.forEach(function(skill)
         {
             console.log(that.name, ' knows ',skill)
         })
     }
     
}
person.details()*/




//2----------------------Approach--> Use binding method which takes parameters and whaever we pass the parameter is treated as current object context
// that is bind method set the context of the this keyword inside a function, arg passed to the bind method , will become value of this keyword inside the function
/*const person={
    name:'pavan',
    skills : ['js','rb','py'],
     details:function()
     {
         this.skills.forEach(function(skill)
         {
             console.log(this.name, ' knows ',skill)
         }.bind(this))
     }
     
}
person.details()*/


//3----------------------Approach--> arrow function-- es6
const person={
    name:'pavan',
    skills : ['js','rb','py'],
     details:function()
     {
         this.skills.forEach((skill)=>
         {
             console.log(this.name, ' knows ',skill)
         })
     }
     
}
person.details()