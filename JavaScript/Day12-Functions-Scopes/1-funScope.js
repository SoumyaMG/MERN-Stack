let n1 = 10, n2 = 20

//variable shadowing -- when name of parameters equal to the global variables
function add(n1, n2) {
    console.log(n1, n2)
    n1 = 100, n2 = 200
    console.log(n1, n2)
    result = n1 + n2 //will make result a global variable
    //const result=n1+n2
    return n1 + n2
}

console.log(add(n1, n2)) //300
console.log(result) // you can access the result from the function because variable declared without var ,let and cosnt are treated as global variables
//console.log(result) //variable declared in side a function is not available outside the function
console.log(n1, n2)      //10, 20