const a=[20,30]

function findProduct(a)
{  
    if(a.length==0)
    {
        product=[]
    }
    else
    {
        product=1
        for(let i=0;i<a.length;i++)
        {
            product=product*a[i]
        }
    }
    return product
}

console.log(findProduct(a))
