const obj={'name':'soma','whoAmi':function(){return this.name}}
let arr=[]
function findFun(obj)
{
    for(let key in obj)
    {
        if(typeof(obj[key])=='function')
        {
            //console.log(key)
            arr.push(key)
        }
    }
    return  arr
}
console.log(findFun(obj))

//console.log(typeof(obj['whoAmi']))