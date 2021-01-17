function removeFromString(a, b, c) {
    const str1 = a.substr(0, b)
    const str2 = a.substr(b, c)
    const str3 = a.substr(b + c)

    const fullStr = str1 + str3


    return fullStr
}

console.log(removeFromString('Rithm School', 0, 6))