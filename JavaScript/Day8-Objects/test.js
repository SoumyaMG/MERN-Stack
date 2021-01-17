
function dynmcObjects(str)
{
   var output={}
   for(var i=0;i<str.length;i++)
   {
       if(output[str[i]]==str[i])
       {
            output[str[i]]+=1
       }
       else{
           output[str[i]]=1
       }
   }
   console.log(output)
}
dynmcObjects('Soumya')