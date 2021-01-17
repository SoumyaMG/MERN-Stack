function Number(arr)
{
    this.arr=arr
    this.getEvens=function()
    {
        const arr1=[]
       /* this.arr.forEach(function(n)
        {
            if(n%2==0)
            {
                arr1.push(n)
            }
        })*/
        for(let i=0;i<this.arr.length;i++)
        {
            if(this.arr[i]%2==0)
            {
                arr1.push(this.arr[i])
            }
        }
        return arr1
    }
    this.getOdds=function()
    {
        const arr1=[]
        this.arr.forEach(function(n)
        {
            if(n%2!=0)
            {
                arr1.push(n)
            }
        })
        return arr1
    }

    this.ascending=function()
    {
        let arr1=this.arr
       return arr1.sort(function(a,b)
       {
           return a-b
       })

        
    }
    this.descending=function()
    {
        this.arr.sort(function(a,b)
        {
            return b-a
        })
        return this.arr
    }
}

const nf=new Number([29,70,5,60])
console.log(nf.getEvens())
console.log(nf.getOdds())
console.log(nf.ascending())
console.log(nf.descending())