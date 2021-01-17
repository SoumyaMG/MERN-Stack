var instructor = { name: 'Elie', job: 'Instructor' }

function swap(instructor,prop)
{
    let b={}
    for(let key in instructor)
    {   
        if(key==prop)
         {
            b[instructor[key]]=key
  
         }
         else
         {
             b[key]=instructor[key]
         }
    }
    console.log(b)
}

swap(instructor,'name')
