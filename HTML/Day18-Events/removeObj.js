let cartItem=[
    { id:1,name:'marker',price:10,qunty:10},
    { id:2,name:'Scale',price:5,qunty:2},
    { id:3,name:'Board',price:500,qunty:1}
]

function deleteObj(cartItem,item)
{   

//method--------------------1
    let index
    for(let i=0;i<cartItem.length;i++)
    {
       if(cartItem[i].id==item.id) 
       {
           index=i
       } 
    }
    cartItem.splice(index,1)
    console.log(cartItem)


//method------------------------2

let newCart=[]
cartItem.forEach(function(n)
{
    if(n.id!=item.id)
    {
        newCart.push(n)
    }
})
console.log(newCart)  
}
deleteObj(cartItem,{ id:2,name:'Scale',price:5,qunty:2})

// method------------------------3
cartItem=cartItem.filter(function(n)
{
    return n.id!=item.id
})

