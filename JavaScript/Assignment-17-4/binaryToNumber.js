const a=[1,1,1,1]

function binaryToNum(a)
{
    var sum=0
    var n=a.length-1
    for(var i=0;i<a.length;i++)
    {
        if(a[i]==1)
        {
            sum=sum+Math.pow(2,n)
        }
        n=n-1
    }
    return sum
}
console.log(binaryToNum(a))