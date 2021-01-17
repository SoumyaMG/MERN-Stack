//array are ordered, integer indexed,collection of values
//object types
//create any array using [] or new Array()

const fruits=['mango','apple']
const players=['dhoni','virat','sachin','rahul'] //new Array('dhoni',''virat','sachin','rahul')


console.log(players)
console.log(players[0]) //dhoni
console.log(players[10]) //undefined

//properties
console.log(players.length) //4

//const mixed=[10,true,'city',[10,20],{name:'arun'},function(){}]

const product=[
    { id:  1,name:'marker',price:15},
    { id: 2,name:'Pen', price: 10}
]
console.log(product[0]) // { id:  1,name:'marker',price:15}
console.log(product[0].name) //marker

console.log('listing Products',product.length)
//loop over array
for(let i=0;i<product.length;i++)
{
    //console.log(products[i])
    console.log(`name - ${product[i].name} price- ${product[i].price}`)
}
