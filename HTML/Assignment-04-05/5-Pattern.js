function pattern(a)
{
    let str=''
    for(let row=1;row<=a;row++)
    {
        for(let space=1;space<=a-row;space++)
        {
            str=str.concat(" ")
        }
        
        let n=row
        for(let col=1;col<=row;col++)
        {
            str=str+n
            n=n-1
        }  
       str=str.concat('\n')
    }
    return str
}
console.log(pattern(5))