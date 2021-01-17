const stockTicker = ['YHOO', 34.4, 'GOOG', 724.03, 'AMZN', 651.23, 'AAPL', 120.44]
const portfolio = [['AAPL', 100], ['YHOO', 200]]


function portfolioFun(stockTicker,portfolio)
{
        var tmp = [];
        var part=2
        var tot=0
        var output={}
    for(var i = 0; i < stockTicker.length; i += part) {
        tmp.push(stockTicker.slice(i, i + part));
    }
    //console.log(tmp)
    //console.log(portfolio)

    for(var i=0;i<portfolio.length;i++)
{
    for(var j=0;j<tmp.length;j++)
    {
        if(portfolio[i][0]==tmp[j][0])
        {
            portfolio[i][1]=portfolio[i][1]*tmp[j][1]
            output[portfolio[i][0]]=portfolio[i][1]   
        }
    }
    tot=tot+portfolio[i][1]
}
output['total']=tot
console.log(output)
}
portfolioFun(stockTicker,portfolio)



