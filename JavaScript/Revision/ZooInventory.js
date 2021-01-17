var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
  ];

  function ZooInventory(myZoo)
  {
        let output=[]
        for(let i=0;i<myZoo.length;i++)
        {
            let arr=`${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}`
            output.push(arr)
        }

    return output
  }

  console.log(ZooInventory(myZoo))