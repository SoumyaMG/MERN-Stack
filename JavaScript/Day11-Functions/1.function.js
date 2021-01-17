//function declaration

//function declaration gets hoisted
//we can call afunction before dclaring it- not a good practice
//console.log(add(20,70)) // not to be done

//add-function name
//n1,n2 -parameters
function add(n1,n2)
{
    console.log('inside function')
    console.log('n1',n1)
    console.log('n2',n2)
    return n1+n2//to return a value from a function, if we dont use return, by default undefined gets returned from a function
}
//add(10,20)--invoking a function or calling a function
//10,20--arguments
const result=add(10,20)
console.log('result',result)


//function expression 
//doesn't get hoisted, even with var keyword

const total=function(n1,n2)
{
    return n1+n2
}

console.log(total(25,35))

//anonymous function-- function without a name
//find(), filter,map,forEach ,'click,function(){}