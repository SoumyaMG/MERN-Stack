var cart=[
    {
        name:'Air Max 2017',
        price:3299,
        quantity:2
    },
    {
        name:'Mac Book Pro',
        price:50000,
        quantity:1
    }
]

function calTotal(cart)
{
    total=0
    cart.forEach(function(lineItem)
    {
        total=total+(lineItem.price*lineItem.quantity)
    })

    return total
}

console.log(calTotal(cart))