function HashTagGenerator(str)
{
    this.str=str
    this.genarateTag=function()
    {
        let words=str.split(' ')
        let output='#'
        for(let i=0;i<words.length;i++)
        {
            const capitalWords=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()
            output=output+capitalWords
        }
        return output
    }
}

const h1=new HashTagGenerator('hello world')
console.log(h1.genarateTag())