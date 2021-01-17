const number='1234567890'

function usePhoneNumberFormatter(numbers)
{
    const firstPart=number.substr(0,3)
    const secondPart=number.substr(3,3)
    const thirdPart=number.substr(6,4)

    return '('+firstPart+') '+ secondPart+'-'+thirdPart
    // return `(${firstPart}) ${secondPart}-${thirdPart}
}

console.log(usePhoneNumberFormatter(number))
console.log(usePhoneNumberFormatter(7259781531))