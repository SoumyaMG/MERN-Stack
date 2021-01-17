const city='Winter'

function reverseVowel(str)
{
    let i,j,k
    let a,b
    console.log(str)
    for(i=0;i<str.length;i++)
    {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o'|| str[i]=='u')
        {
            a=i
            break;
            /*a=str[i]
            break*/
        }
    }
    for(j=str.length-1;j>=0;j--)
    {
        if(str[j]=='a' || str[j]=='e' || str[j]=='i' || str[j]=='o'|| str[j]=='u')
        {
            
            b=str[j]
            break;
            /*b=j
            break*/
        }
    }
    let str1= str.replace(str[j],str[i]) //bangalora
     str1=str1.replace(str[i],b)    //bengalora
     return str1

     /*let str1= str.replace(str[i],str[j]) //bengalore
     str1=str1.replace(str[j],a)    //bangalore
     return str1*/

}
console.log(reverseVowel(city))