const name="Sarvesh"
const vowel=['a','e','i','o','u']
var str
function petNameGenerate(name)
{
    for(var i=0;i<vowel.length;i++)
    {
        if(name.charAt(2)==vowel[i])
        {
            str=name.slice(0,4)
        }
        else
        {
            str=name.slice(0,3)
        }
    }
    return str
    
}

console.log(petNameGenerate(name))