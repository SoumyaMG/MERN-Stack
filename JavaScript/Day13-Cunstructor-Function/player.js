function Player(name,runs)
{
    this.name=name
    this.runs=runs
    
    this.calAvg=function ()
    {
        let total=0
        this.runs.forEach(function(run)
        {
            total+=run
        })
        return total/this.runs.length
    }
}

const p1=new Player('Sachin',[30,70,100])
console.log(p1.name,p1.calAvg())

const p2=new Player('Virat',[50,60])
console.log(p2.name,p2.calAvg())

const p3=new Player('Dhoni',[80])
console.log(p3.name,p3.calAvg())