//to find id a element is present in the array
const number=[10,20,30,40,50]
// see if 40 is present in numbers

//1. includes   -----> return boolean
console.log(number.includes(40)) //true
console.log(number.includes(400)) //false

//2.indexOf
console.log(number.indexOf(40)>=0)  //true

//3. c style approach
function findEle1(number,n)
{
    let output=false
    for(let i=0;i<number.length;i++)
    {
        if(number[i]==n)
        {
            output=true
            break
        }
    }
    return output
}

console.log(findEle1(number,40))  //true
console.log(findEle1(number,400))  //false

// if you want to return undefined if condition is not satisfied
function findEle(number,n)
{
    let output
    for(let i=0;i<number.length;i++)
    {
        if(number[i]>n)
        {
            output=number[i]
            break
        }
    }
    return output;
}

console.log(findEle(number,25))  // 30
console.log(findEle(number,400))  // undefined

//4.    js style
        //find
        //const number=[10,20,30,40,50]
function findN(number,num){
    const result1=number.find(function(n)
{
    return n > num
})
return result1
}

console.log(findN(number,25))

