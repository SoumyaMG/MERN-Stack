const arr=[10,20,30]

arr.map(function(n)
{
    return n+5
})

console.log(arr)// returns [10,20,30]


const arr1=arr.map(function(n)
{
    return n+5
})

console.log(arr1)// returns [15,25,35]