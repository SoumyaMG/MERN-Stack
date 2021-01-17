const cart=[]

function cartItems(cart,product)
{
    const item=cart.find(function(lineItem)
    {
        return lineItem.id==product.id
    })
    if(item)
    {
        item.quantity=item.quantity+product.quantity
    }
    else{
        cart.push(product)
    }

    return cart
}

console.log(cartItems(cart,{id:1,name:'marker',quantity:1}))
console.log(cartItems(cart,{id:1,name:'marker',quantity:1}))