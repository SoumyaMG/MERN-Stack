function countUpDown(a)
{
    var b=[]
    for(var i=0;i<=a;i++)
    {
        b=b.concat(i)
    }
    for(var j=a-1;j>=0;j--)
    {
        b=b.concat(j)
    }
    return b
}

console.log(countUpDown(0))