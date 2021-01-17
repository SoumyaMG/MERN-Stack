function letterPrinting(a){
    let b=65
    let str1=''
    for (let i = 1; i <= a;i++)
    {
        let str = String.fromCharCode(b)
        str1=str1+(`${str} `.repeat(i))
        str1=str1.concat('\n')
       b=b+1
    }
    return str1
}
console.log(letterPrinting(5))
