function pattern(a)
{
    let str=''
for(let i=1;i<=5;i++)
{
   for(j=1;j<=i;j++)
   {
       str=str+j
   }
   str=str.concat('\n')
}
return str
}
console.log(pattern(5))