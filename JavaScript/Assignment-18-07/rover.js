function rover(a, b, c, d) {
    let x = a
    let y = b
    let f = c
    let str = d

    for (let i = 0; i < str.length; i++) {
        //  writing conditions for movement
        if (str[i] == 'M' && f == 'N') {
            y = y + 1
        }
        else if (str[i] == 'M' && f == 'S') {
            y = y - 1
        }
        else if (str[i] == 'M' && f == 'E') {
            x = x + 1
        }
        else if (str[i] == 'M' && f == 'W') {
            x = x - 1
        }

        // writing conditions for Left and Right facing
        else if ((str[i] == 'L' && f == 'N') || (str[i] == 'R' && f == 'S')) {
            f = 'W'
        }
        else if ((str[i] == 'L' && f == 'W') || (str[i] == 'R' && f == 'E')) {
            f = 'S'
        }
        else if ((str[i] == 'L' && f == 'S') || (str[i] == 'R' && f == 'N')) {
            f = 'E'
        }
        else if ((str[i] == 'L' && f == 'E') || (str[i] == 'R' && f == 'W')) {
            f = 'N'
        }
    }
    str = x + " " + y + " " + f
    return str
}

console.log(rover(3, 3, 'E', 'MMRMMRMRRM'))