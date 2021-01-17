//  template literal- string literal - template string
// var,let & const
//default param values

//object
    //concise properties & methods

    const name='arjun'
    const city='Bangalore'

    //es5
    const person={
        name:name,
        city:city
    }

    //es6 -concise property
    //when the property name and the variable name is same, we can omit the property name and use var name

    const student={
        name,
        city
    }
    console.log(student)




    //es5
    const emp={
        name:'raju',
        greet:function()
        {
            return 'Hi '+this.name
        }
    }
    console.log(emp.greet())    //  Hi raju

    //es6--Concise method
    const emp={
        name:'raju',
        greet()
        {
            return 'Hi '+this.name
        }
    }
    console.log(emp.greet())    //Hi raju