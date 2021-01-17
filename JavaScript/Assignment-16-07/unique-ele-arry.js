function difference(a, b) {
    if (a.length == 0 && b.length == 0) {
        return "empty array"
    }
    const arr3 = a.concat(b)
    const arr4 = []
    for (let i = 0; i < arr3.length; i++) {
        if (!arr4.includes(arr3[i])) {
            arr4.push(arr3[i])
        }
    }

    arr4.sort(function (a, b) {
        return a - b
    })

    return arr4
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]))


/*
function difference(a, b) {
    if (a.length == 0 && b.length == 0)
    {
        return "empty array"
    }
    const arr3 = a.concat(b)
    const arr4 = []
    for (let i = 0; i < arr3.length; i++)
    {
        let count = 0
        for (let j = 0; j < arr3.length; j++)
        {
            if (arr3[i] == arr3[j])
            {
                count=count+1
            }
        }
        if (count <= 1)
        {
            arr4.push(arr3[i])
        }
    }
    return arr4
}
*/