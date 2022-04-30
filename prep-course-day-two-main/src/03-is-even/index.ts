/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */


const EVEN_DIGITS = ["0", "2", "4", "6", "8"]

function isEven(n: number) {
    let nAsString  = n.toString().split(".")[0]
    let lastChar = nAsString.charAt(nAsString.length - 1)
    return EVEN_DIGITS.includes(lastChar)
}

    export { isEven };


    // const EVEN_NUMBERS = [0, 2, 4, 6, 8].map(num => num.toString())

    // function isEven(n: number): boolean {
    //     const lastChar = n.toFixed().split("").splice(-1)[0]
    //         return (EVEN_NUMBERS.indexOf(lastChar) > -1) 
    // }