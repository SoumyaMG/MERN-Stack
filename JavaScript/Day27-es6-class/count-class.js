//property--value
//method -up
//es6 syntax

class Counter {
    constructor(num) {
        this.value = num
    }
    up() {
        this.value = this.value + 1
        return this.value
    }
    //this is static function
    static func1() {
        return 'this is static method'
    }
}

const c = new Counter(0)
console.log(c.up())
console.log(Counter.func1())