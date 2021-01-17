class Person {
    //to set the initial data for your properties
    constructor(fname, lname) {
        this.code = this._generateCode()
        this.firstName = fname
        this.lastName = lname
        this.createdAt = new Date()
    }

    //methods starting with _ mean that it is a private method, so developer should keep in mind that those methods can not be made available for the uses
    _generateCode() {
        console.log(`DCT-${Math.round(Math.random() * 1000)}`)
    }

    //instance methods --methods available on Objects
    fullName() {
        //inside an instance method, this refers to current object
        //You can call static methods from an instnace menthod by using callsName.staticfunction()
        return `${this.firstName} ${this.lastName}`
    }

    //static method /class method-- methods available on class
    static functionName() {
        //inside static function this refers to the whole class
        //you can call instance method from static method , by creating the object in side the static method and then const obj=new this() 
        //where this refers to current class
        /*real world use case is, all sorting, finding and filtering functionalities are implimented using static method, because the action performed (find sort, filter) is not on perticuler object but it is on collection of objects*/
        console.log('static method', this)
        return 'this is a static method'
    }

}

const p1 = new Person("Soumya", "Gidd")
console.log(p1)
console.log(p1.fullName())
//(p1.generateCode())       //throws an error
//(p1._generateCode())      //it still works
console.log(Person.functionName())