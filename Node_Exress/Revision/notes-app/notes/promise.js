const resolve=function(val)
{
    console.log('resolved ' +val)
}

const reject=function(val){
    console.log('rejected '+val)
}

function generateNo(resolve,reject){
    const random=Math.round(Math.random()*100)
        if(random%2==0)
        {
            resolve(random)
        }
        else{
            reject(random)
        }
}

generateNo(resolve,reject)

