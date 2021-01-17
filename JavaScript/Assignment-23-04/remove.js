var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };
function removeFun(student,prop)    
{
    //let output={}
     if(student.hasOwnProperty(prop))
       {
            delete student[prop]
            return student
       }
       else
       {
         return student   
       }
}


console.log(removeFun(student,'class'))