const arr=[1,4,6,8,3,9,2]

function arrayRotate(arr,n)
{
    var m
    for(var i=0;i<n;i++)
    {
        m=arr.shift()
        arr.push(m)
    }
    return arr
}

console.log(arrayRotate(arr,3))