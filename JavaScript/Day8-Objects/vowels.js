// count the no of vowels kin an string

function frequency(str)
{
    vowels={a:0,e:0,i:0,o:0,u:0}
    for(let i=0;i<str.length;i++)
    {
        if(vowels.hasOwnProperty(str[i]))
        {
            vowels[str[i]]+=1
        }

    }
    return vowels
}
console.log(frequency('bangalore'))