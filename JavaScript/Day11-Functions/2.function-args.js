function add(n1,n2)
{
    console.log(n1,n2)
    return n1+n2
}

//1-- when no arguments are passed
//other languages Error--Wrong number of arguments 0 for 2
//if no argumnets are passed, parameters will hold defalut value of undefined
// inside function-- n1=undefined n2=undefined  n1+n2=NaN  typeof NaN--number
console.log(add())

//---------------------------------------2
//2-- when additional arguments are passed
//other languages Error--Wrong number of arguments 3 for 2
//in js extra arguments are ignored
// inside function-- n1=10 n2=20   n1+n2=30
console.log(add(10,20,30))

//---------------------------------------2
//1-- when less arguments are passed
//other languages Error--Wrong number of arguments 1 for 2
// inside function-- n1=10 n2=undefined  return n1+n2=Nan
console.log(add(10))

//---------------------------------------3
//1-- when correct arguments are passed
// inside function-- n1=10 n2=20  return n1+n2=30
console.log(add(10,20))