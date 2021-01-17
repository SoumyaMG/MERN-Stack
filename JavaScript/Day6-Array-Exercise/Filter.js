// find all elements that meets a condition
//1. c style 
const number=[10,20,30,40,50]
function findAll(number,num)
{
    const output=[]
    for(let i=0;i<number.length;i++)
    {
        if(number[i]>num)
        {
            output.push(number[i])
        }
    }
    return output
}

console.log(findAll(number,25))
console.log(findAll(number,250))

//2. Js Style Approach
 function jsFindAll(number,num)
 {
   return  number.filter(function(n)
     {
        return n>num
     })
 }
 console.log(jsFindAll(number,10))
 console.log(jsFindAll(number,100))