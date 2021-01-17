const arr=[1,2,3,1,2]

function notRepeatedNum(arr)
{
    n=arr.length
    var result=[]
    for (var i = 0; i < n; i++)
    {
        for (var j=0 ; j < n; j++)
         { 
             if (i!=j && arr[i]==arr[j])
            {
                break;
            }
        }
        if(j==n)
        {
            result.push(arr[i]);
        }
    }
return result;
}

console.log(notRepeatedNum(arr))
