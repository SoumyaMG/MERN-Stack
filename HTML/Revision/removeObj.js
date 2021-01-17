let cartItem=[
    { id:1,name:'marker',price:10,qunty:10},
    { id:2,name:'Scale',price:5,qunty:2},
    { id:3,name:'Board',price:500,qunty:1}
]

function remove(cartItem,itemId)
{
    let index
    for(let i=0;i<cartItem.length;i++)
    {
        if(itemId==cartItem[i].id)
        {
            index=i
        }
    }
    cartItem.splice(index,1)

    return cartItem
}

console.log(remove(cartItem,1))