//Passing the object to constructor function--- advantage over passing the values coma seperated , because if order differs then wrong value are assigned to the variables, So we pass objects as they are already unordered and we acan refer them using the property values

//es5 syntax
function Player(data) {
    this.fname = data.fname
    this.lname = data.lname
}
const p = new Player({ fname: 'Sachin', lname: 'Tendulkar' })


//es6 syntax
class Player {
    constructor(data) {
        this.fname = data.fname
        this.lname = data.lname
    }
}
const p = new Player({ fname: 'Sachin', lname: 'Tendulkar' })