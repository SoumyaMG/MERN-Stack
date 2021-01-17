const vowels = ['a', 'e', 'i', 'o', 'u']
const consonents = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

function isAlt(a) {
    let inc = 1
    for (let i = 1; i < a.length; i++) {
        if (vowels.includes(a.charAt(i - 1)) && consonents.includes(a.charAt(i))) {
            inc = inc + 1
        }
        else if (consonents.includes(a.charAt(i - 1)) && vowels.includes(a.charAt(i))) {
            inc = inc + 1
        }
        else {
            return false
        }
    }
    if (a.length == inc) {
        return true
    }
}

console.log(isAlt("amazon"))