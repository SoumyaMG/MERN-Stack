//falsy values
//0,'',false,undefined,null,NaN

//truthy
//1,true,'dct',[],{}\`1adzdxcz

const values = [1, 0, false, true, '', {}, [], 'dct', undefined, NaN]

function filtervalues(values) {
    const output = []
    /*  const n1=10,n2=20
      return {n1:n1, n2:n2}
  // you can not return multiple vales in javascript, if you want to do so,
   you can use array or objects */
    for (var i = 0; i < values.length; i++) {
        if (values[i]) {
            output.push(values[i])
        }
    }
    return output
}

console.log(filtervalues(values))




// return multiple values using array
function filterValueArr(values) {
    const output = [], truthy = [], falsy = []
    for (let i = 0; i < values.length; i++) {
        if (values[i]) {
            truthy.push(values[i])
        }
        else {
            falsy.push(values[i])
        }
    }
    return [truthy, falsy]
}
console.log(filterValueArr(values))


// return multiple values using object 
function filterValueObj(values) {
    const output = [], truthy = [], falsy = []
    for (let i = 0; i < values.length; i++) {
        if (values[i]) {
            truthy.push(values[i])
        }
        else {
            falsy.push(values[i])
        }
    }
    return { truthy: truthy, falsy: falsy }
    //es6 concise properties- whenever the property name and the 
    //variable name is same you can eliminate using the property name
    // So you can write it as { truthy,falsy}
}
console.log(filterValueObj(values))

