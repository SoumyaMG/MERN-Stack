const player={
    fname:'Sachin',
    runs:[40,60,70],
    calAvg:function()
    {
        let total=0
        for(var i=0;i<player.runs.length;i++)
        {
            total+=this.runs[i]
        }
        return total/player.runs.length
    }
}
player.runs.push(50)
console.log(player.runs)
console.log(player.calAvg())