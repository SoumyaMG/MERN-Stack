//properties- name,price
//methods- details

class Product {
    constructor(data) {
        this.name = data.name
        this.price = data.price
    }
    details() {
        return `${this.name}-${this.price}`
    }
}

class Mobile extends Product {
    constructor(data) {
        super(data)     // always we need to call the super class constructor first and then the subclass constructor
        this.model = data.model
        this.make = data.make
    }
}

const m = new Mobile({ name: 'redmi note 7', price: 10000, model: 'note 7', make: 'MI' })
console.log(m.details())