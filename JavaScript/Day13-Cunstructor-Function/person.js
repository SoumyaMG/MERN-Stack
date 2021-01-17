/*
Person // properties-firstname and lastname
    //method - full name 
*/

function Person(fname,lname)
{
    this.fname=fname
    this.lname=lname 
    this.fullName=function()
    {
        console.log(this.fname+' '+this.lname)
    }
}

const p1=new Person('Soumya','Gidd')
p1.fullName()