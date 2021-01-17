var obj = { a: 1, b: 2, c: 3 };

function valuesObj(obj)
{
    let arr=[]
    for(let key in obj)
    {
            //console.log(key)
            arr.push(obj[key])
    }
    return arr
}

console.log(valuesObj(obj))