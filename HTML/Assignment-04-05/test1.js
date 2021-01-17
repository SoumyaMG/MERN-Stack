function pattern(a)
{
    let str=''
    for(let row=1;row<=a;row++)
    {
        for(let space=1;space<=a-row;space++)
        {
            str=str.concat(" ")
        }
        
        for(let col=1;col<=row;col++)
        {
            str=str.concat('*')
        }  
       str=str.concat('\n')
    }
    console.log(str)
}

pattern(5)