/*function totalCaps(arr){
var count=0;
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(arr[i][j]==arr[i][j].toUpperCase()){
      count++;
    }
  }
}
return count;

}
totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]);*/

function totalCaps(arr){

    var capital=0
    for(var i=0;i<arr.length;i++)
    {
      for(var j=0;j<arr[i].length;j++)
      {
        if(arr[i].charAt(j)==arr[i].charAt(j).toUpperCase())
        {
          capital=capital+1
        }
      }
    }
    return capital
  }
  
  console.log(totalCaps(["AWESOME", "ThIngs", "hAppEning", "HerE"]))