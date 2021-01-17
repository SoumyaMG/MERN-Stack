const fruit=['apple','Mango']

function showFruit(fruit)
{
    console.log(this)
}

fruit.forEach(showFruit.bind({king:'Mango'}));