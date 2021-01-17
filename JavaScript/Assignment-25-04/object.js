function stringFromObject(a){
    let str=[]
    if(Object.keys(a).length==0)
    {
        return 'invalid input'
    }
    for (let key in a)
    {
        str.push(key+' = '+a[key])
    }
   return str.join(', ')

}

console.log(stringFromObject({ a: 1, b: '2' }))

console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }))

console.log(stringFromObject({}))