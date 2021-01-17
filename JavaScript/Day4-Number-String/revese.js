function revese(str)
{
    let output=''
    for(let i=str.length-1;i>=0;i--)
    {
        output=output+str[i]
    }
    return output
}


console.log(revese('Hello'))