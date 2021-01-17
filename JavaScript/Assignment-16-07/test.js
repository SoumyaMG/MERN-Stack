function waveSort(arr) {
    arr = arr.sort(function (a, b) {
        return b - a;
    });

    let inc = 1
    for (var i = 1; i < arr.length; i += 2) {
        if (arr[i - 1] > arr[i]) {
            var temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            inc = inc + 2
        }
        else if (i + 1 < arr.length && arr[i + 1] > arr[i]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            inc = inc + 1
        }
    }
    if (arr.length == inc) {
        return true
    }
    else {
        return false
    }
}

console.log(waveSort([0, 1, 2, 4, 1, 1, 1]))