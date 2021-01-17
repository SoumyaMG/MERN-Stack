let arr=[-10,-52,-4.5,-10]

function sum(arr)
{
    let sum=0,a=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>0)
        {
            sum=sum+arr[i]
        }
    }
    return sum
}

console.log(sum(arr))