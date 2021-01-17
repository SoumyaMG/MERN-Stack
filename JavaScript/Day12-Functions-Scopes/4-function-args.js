function listFruits()
{
    
    console.log(arguments) // argument is default object always present in the parameter place which stores the values as key pair values passes in functionn call
    console.log('args 1'+arguments['0'])
}

console.log(listFruits('apple','mango','water melon'))