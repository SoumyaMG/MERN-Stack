array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];


function sumTwoArrayIndexes(a,b){
    var n = a.length
    var m = b.length
    var x, y,i,j
    var c = []
    if (n > m)
    {
        x = n - m
        y = n
        for ( i = 1; i <= x; i++)
        {
            b.push(0)
        }     
    }
    else if (m > n)
    {
        x = m - n
        y = m
        for ( i = 0; i <= x; i++)
        {
            a.push(0)
        }
    }
    else if(n==m)
    {
        y=m
    }

    for (j = 0; j < y; j++)
    {
        c.push(a[j]+b[j])
    }
    return c
}


console.log(sumTwoArrayIndexes(array1,array2))