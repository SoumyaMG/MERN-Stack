const a=[["white", "goodness"], ["blue", "tranquility"]]
//returns [{'white': "goodness"},{'blue': "tranquility"}])

function association(a)
{
    let c=[]
    for(let i=0;i<a.length;i++)
    {
        let b={}
        b[a[i][0]]=a[i][1]
        c.push(b)
    }
    return c
    
}
console.log(association(a))
//association(a)

