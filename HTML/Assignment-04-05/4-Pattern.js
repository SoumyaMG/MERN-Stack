function pattern(a)
{
    let str=''
for(let i=1;i<=a;i++)
{
   for(j=1;j<=i;j++)
   {
       str=str+i
   }
   str=str.concat('\n')
}
return str
}
console.log(pattern(5))