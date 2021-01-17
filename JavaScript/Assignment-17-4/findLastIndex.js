const a='awesome'

function findLastIndex(a,b)
{
    let index=-1
    for(let i=0;i<a.length;i++)
    {
        if(a[i]==b)
        {
            index=i;
        }
    }
    return index;
}

console.log(findLastIndex(a,'z'))