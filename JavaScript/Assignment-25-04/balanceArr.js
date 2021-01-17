const a=[1,2,1,2,1,3]

function balance(a)
{
    let n=a.length
    let mid=n/2,sum1=0,sum2=0
    for(let i=0;i<a.length;i++)
    {
        if(i<mid)
        {
            sum1=sum1+a[i]
        }
        else{
            sum2=sum2+a[i]
        }
        
    }
    if(sum1>sum2)
    {
        return sum1-sum2
    }
    else{
        return sum2-sum1
    }
}

console.log(balance(a))