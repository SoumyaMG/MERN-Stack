const number=[10,20,30,40,50]

const result=number.filter(function(n)
{
    return n%2==0
})
console.log(result)

/*ES6 arrow function ( it can be written as .filter((n)=>
{
    return n%2==0
})) if there is only parameter to be passed you cann miss the () brackets 
and siply write n and if you have only one return statement 
then you can skip return statement and {} brackets*/
const even=number.filter(n => n%2==0)
console.log(even)
