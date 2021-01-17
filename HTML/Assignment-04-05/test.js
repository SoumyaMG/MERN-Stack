/*function pattern(a)
{
    
   /* for(let row=1;row<=a;row++)
    {
        let str=''
        for(let space=1;space<=a-row;space++)
        {
            str.concat(" ")
        }
        
        for(let col=1;col<=row;col++)
        {
            str.concat('*')
        }  
       console.log(str)
       console.log('\n')
    }*/
    let x=5
    let y=5
    let str = "";

    for(let i = 1; i < y; i++ ){
        for(let j = 1; j < x; j++){
            if(i + j >= y){
                str = str.concat("*");
            }else{
                str = str.concat(" ")
            }
        }
        str = str.concat("\n")
    }

    console.log(str)

//}
//pattern(5)
