//property--value
//method -up
//es5 syntax

function Counter(num) {
    this.value = num
    this.up = function () {
        this.value = this.value + 1
        return this.value
    }
}

//this is static/class function
Counter.func1 = function () {
    return 'this is static method'
}

const c = new Counter(0)
console.log(c.up())
console.log(Counter.func1())