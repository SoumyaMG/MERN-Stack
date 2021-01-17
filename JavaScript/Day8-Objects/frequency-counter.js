//object prop names must be unique

function frequency(str)
{
    output={}
    for(let i=0;i<str.length;i++)
    {
        if(output[str[i]])
        {
            output[str[i]]+=1
        }
        else
        {
            output[str[i]]=1
        }
    }
    return output
}
console.log(frequency('abcaab'))


