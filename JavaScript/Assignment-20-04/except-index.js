const a=['a', 'b', 'c', 'd', 'e']
const index=[1,3]

function exceptIndex(a,index)
{
    for(var i=index.length-1;i>=0;i--)
    {
        a.splice(index[i],1)
    }
  
    return a
}
console.log(exceptIndex(a,index))