const a=[[10,0,0],[0,20,0],[0,0,30]]


function diagonalSum()
{
    let sum=0
    
    for (let i = 0; i < a.length; i++) { 
        for (let j = 0; j < a.length; j++) { 
  
            // Condition for principal diagonal 
            if (i == j) 
                sum += a[i][j]; 
        } 
    } 
    return sum
}
console.log(diagonalSum(a))