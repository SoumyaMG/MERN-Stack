function tallyPoints(z){
    let output = { a: 0, b: 0, c: 0, d: 0, e: 0 }
    let arr=[]
    for (let i = 0; i < z.length; i++)
    {
        if (z.charAt(i) == z.charAt(i).toLowerCase())
        {
            output[z.charAt(i)]+=1
        }
        else {
            output[z.charAt(i).toLowerCase()]-=1
        }
    }
    arr=Object.keys(output).map(function(key)
    {
        return [key,output[key]]
        arr.sort([output[key]])
    })

    
    return arr
    
}

console.log(tallyPoints('dbbaCEDbdAacCEAadcB'))