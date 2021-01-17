var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
  ];

  function zooInventory(myZoo) {

    const output = []
    for (var i = 0; i < myZoo.length; i++)
    {
        const str = `${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}`
        output.push(str)
    }

    return output
}

console.log(zooInventory(myZoo))