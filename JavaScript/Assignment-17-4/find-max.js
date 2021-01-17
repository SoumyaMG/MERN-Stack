const a=[50,27,100,37,90]

function findMax(a)
{
    let max=a[0]
    for(let i=1;i<a.length;i++)
    {
        if(max>a[i])
        {
        }
        else
        {
            max=a[i]
        }
    }
    return max
}

console.log(findMax(a))