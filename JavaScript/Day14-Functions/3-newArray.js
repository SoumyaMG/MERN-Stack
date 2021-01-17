const n1=[10,20,30]

//n2 now holds the reference of n1
const n2=n1
n2.push(40)
//n2=[10,20,30,40]
//n1=[10,20,30,40]

//create new array
const n3=[].concat(n1)// || n1.map(function(n){return n})   || n1.slice(0) ||  [...n1]
//n3=[10,20,30,40]
//n1=[10,20,30,40]

n3.push(50)
//n3=[10,20,30,40,50]
//n1=[10,20,30,40]
