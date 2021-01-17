function functionOne() {
    function functionTwo() {
        return 'im inside function two'
    }
    return functionTwo
}

const f2 = functionOne()
console.log(f2())