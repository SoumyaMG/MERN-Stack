let str='abddCEaDBeb'

function fun(str)
{
  let obj={'a':0,'b':0,'c':0,'d':0,'e':0}
  for(let i=0;i<str.length;i++)
  {
    if(str.charAt(i)==str.charAt(i).toLowerCase())
    {
      obj[str.charAt(i)]+=1
    }
    else{
      obj[str.charAt(i).toLowerCase()]-=1
    }
  }
  sortAssocObject(obj)

}
function sortAssocObject(list) {
  var sortable = [];
  for (var key in list) {
      sortable.push([key, list[key]]);
  }

  sortable.sort(function(a, b) {
      return (a[1] > b[1] ? -1 : (a[1] < b[1] ? 1 : 0));
  });

  var orderedList = {};
  for (var i = 0; i < sortable.length; i++) {
      orderedList[sortable[i][0]] = sortable[i][1];
  }

   let arr=[]
   for(let key in orderedList)
   {
      arr.push(`${key}:${orderedList[key]}`)
   }
   console.log(arr)
}


fun(str)