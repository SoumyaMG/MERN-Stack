
function stringChop(str,n)
{
    let output=[]

    if (n == undefined)
    {
        output.push(str)
        return output
    }
    else{
        for(let i=0;i<str.length;i+=n)
        {
            let str1=str.slice(i,i+n)
            output.push(str1)
        }
        return output
    }
}

console.log(stringChop('resource'))
console.log(stringChop('resource',2))
console.log(stringChop('dcresource',3))