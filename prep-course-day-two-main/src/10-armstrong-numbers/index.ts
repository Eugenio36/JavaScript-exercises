/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

function validate(n: number) {
  const digits = [...n.toString()]; // make an array of numbers, if number is 153 --> result ["1", "5", "3"]
  const power = digits.length; // shows the length of numbers, if number is 153 --> result is 3

  const result = digits.reduce((prevValue, currentValue) => {
    return prevValue + Math.pow(parseInt(currentValue), power);
  }, 0);
  return result === n;
}

export { validate };

// function validate(n: number) {
//   const digits = [...`${n}`] // make an array of numbers, if number is 153 --> result ["1", "5", "3"]
//   const power = digits.length; // shows the length of numbers, if number is 153 --> result is 3
//   let result = 0

//   digits.forEach((digit) => {
//     result+=Math.pow(parseInt(digit),power) // 1^3 + 5^3 + 3^3 = 153
//   })
//   return result === n // 153 = 153
// }
