var superH = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]

  function powers(superH,name)
  {
      var output
    for(var i=0;i<superH.length;i++)
    {
        if(superH[i].name==name)
        {
            output=`{${superH[i].powers}}`
        }
    }
    return output
  }
  console.log(powers(superH,"Molecule Man"))