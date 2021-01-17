const str="May I take your Pencil please?"

var str1=str.trim().split(" ")
//console.log(str1)
var n=str1.length-1
var output

function politeWord(str2)
{
    if(str2=='please?')
    {
       output=str1.join(" ")

    }
    else if(str2.charAt(str2.length-1)=='?')
    {
        str2=str2.replace('?',' Please?')
        str1.pop()
        str1.push(str2)
        output=str1.join(" ")
    }
    else
    {
        output=str1.join(" ")
    }

return output
}
console.log(politeWord(str1[n]))