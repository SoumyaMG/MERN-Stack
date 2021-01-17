function waveSort(arr) {
    arr = arr.sort(function (a, b) {
        return b - a;
    });
    let inc = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i] && (i - 1) % 2 == 0) {
            inc = inc + 1
        }
        else if (arr[i - 1] > arr[i] && (i - 1) % 2 != 0) {
            let temp = arr[i - 1]
            arr[i - 1] = arr[i]
            arr[i] = temp
            inc = inc + 1
        }
        else {
            inc = inc - 1
        }
    }
    if (arr.length == inc) {
        return true
    }
    else {
        return false
    }
}

console.log(waveSort([39, 20, 22, 4, 14, 4, 6]))