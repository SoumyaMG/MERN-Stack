
var passwords = [
    'Password123',
    'dct@academy',
    'qwerty',
    'secret123',
    'gopro123',
    'harryp@tter'
  ];
function authenticate(a,b){
    var output
   const result=a.find(function(str)
   {
        return str==b
   })
   if(result)
   {
        output='athenticated'
   }
   else{
       output='not athenticated'
   }
   return output
}

console.log(authenticate(passwords,'harryp@tter'))

/*
 var i,j
    var str
    for(i=0;i<a.length;i++)
    {
        for(j=0;j<a[i].length;j++)
        {
            if(a[i].charAt(j)==b.charAt(j))
            {

            }
            else{
                break
            }
        }
        if(a[i].length==j)
        {
            str='athenicated'
        }
    }
   if(a.length==i+1)
   {
     str='notathenicated'
 }
    console.log(str)*/ 