const counter=
{
    count:0,
    //To get the count value
    getValue:function()
    {
        return this.count
    },
    //To increment the count by 1
    up:function()
    {
        this.count=this.count+1
    },

    //To increment the count by 1
    down:function()
    {
        this.count=this.count-1
    },
    //To reset the count value
    reset:function()
    {
        this.count=0
    },

    // To increment the coounter by certain value
    upBy:function(n)
    {
        this.count=this.count+5
    }
}

console.log(counter.getValue()) //0

counter.up()
console.log(counter.getValue()) //1

counter.up()
console.log(counter.getValue()) //2

counter.down()
console.log(counter.getValue()) //1

counter.reset()
console.log(counter.getValue()) //0

counter.upBy(5)
console.log(counter.getValue()) //5






