
function findChar(str,char)
{
   let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==char)
        {
            count++;
        }
    }
    return count


}

console.log(findChar('Hello','l'))
console.log(findChar('Bangalore','a'))