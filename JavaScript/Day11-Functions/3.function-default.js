function add(n1,n2)
{
    //set default parameter values--es5
    //ternary operator=(condition)?trueStatuement:falseStatement
    n1=typeof n1=='undefined'?0:n1  //1way
    n2=n2==undefined ? 0: n2      //2Way
    console.log('n1',n1,'n2',n2)
    return n1+n2
}


console.log(add())  //0
console.log(add(10))    //10
console.log(add(10,20,50))  //30



//es6 default parameter
function total(m1=0,m2=0)
{
    return m1+m2
}

console.log('------es6')
console.log(total(10))    //10
console.log(total(10,20))  //30
