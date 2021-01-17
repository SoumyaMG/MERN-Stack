const str={"bar": [ 2, 3], "foo": 1 }
let str1=[]

function findQueryStr(str)
{
    for(let key in str)
{
    if (typeof(str[key])=='object')
    {
        for(var i=0;i<str[key].length;i++)
        {
            str1.push(key+'='+str[key][i])
        }
    }
    else
    {
        str1.push(key+'='+str[key])
    }
}
console.log(str1)
console.log(str1.join('&'))
}

//console.log(findQueryStr(str))

findQueryStr(str)
