const city='Bangalore'

//String is an array of charecters
console.log(city[0])  //'B'
console.log(city[1])  //'a'

for(let i=0;i<city.length;i++)
{
    console.log(city[i])
}

//find the total count of vowels in string
//total times a charecter appears in a string
//reverse a string without inbuilt methods
//make a hashtag of a given string
//reverse words in a string

const w1='hello'
const w2='world'
const w3='bangalore'

console.log(w1 + ' '+ w2+ ' '+w3);

console.log(city)

let output=''
for(let i=0;i<city.length;i++)
{
    output=output+city[i]
}
console.log(output)
