//counter
    //prop-- count=0
    //methods-- up(), down(), reset()

function Counter()
{
    this.count=0        //instance variable -member variable
    this.up=function()
    {
        return this.count=this.count+1
    }
    this.down=function()        //instance method-member function--methods
    {
        return this.count=this.count-1
    }
    this.reset=function()
    {
        return this.count=0
    }
    this.upBy=function(n)
    {
        return this.count=this.count+n
    }
}
const c1=new Counter()
console.log(c1.up())
console.log(c1.up())
console.log(c1.reset())
console.log(c1.down())
console.log(c1.upBy(5))