function playNameGame(a){
    output = ['Bo Baniel Banana Fana Fo Faniel Fee Fi Mo Maniel']
    if(a=='')
    {
        return 'invalid input'
    }
    else
    {
        output.unshift(a)
        output.unshift(a)
        output.push(a)
        return `${output[0]} ${output[1]} ${output[2]} ${output[3]}`
    }
    
}

console.log(playNameGame('Airtel'))