function stringChop(a,b){

    const output = []
    if (b == undefined)
    {
        output.push(a)
        return output
    }
    for (var i = 0; i < a.length; i += b)
    {
        const word = a.slice(i, i + b)
        output.push(word)
    }

    return output

}

console.log(stringChop('resource'))
console.log(stringChop('resource',2))
console.log(stringChop('dcresource',3))