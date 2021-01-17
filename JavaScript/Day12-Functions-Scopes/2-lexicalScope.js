const n1 = 10

function fun1() {
    console.log('inside fun1 n1', n1)
    const n2 = 20
    function fun2() {
        const n3 = 30
        console.log('inside fun2 n1', n1)
        console.log('inside fun2 n1', n2)
        console.log('inside fun2 n1', n3)
        function fun3() {
            console.log('inside fun3 n3', n3)
        }
        fun3()
    }
    fun2()
}

fun1()