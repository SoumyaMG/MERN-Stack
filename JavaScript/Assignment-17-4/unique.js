function findUnique(a){

    n = a.length
    var result
   
    if (n == 0)
    {
        return null
    }
    else
    {   
        for (var i = 0; i < n;i++)
        {
            for (var j = 0; j < n; j++)
            {
                if (i != j && a[i]==a[j])
                {
                    break
                }
            }
        if (j == n)
        {
            result=a[i]
        }
        }
    }
    return result
}

console.log(findUnique([]))