import { isRegularExpressionLiteral } from "typescript";

export {};

/*
Exercise #9
Complete the square sum function so that it squares each number passed into it and then sums the results together.

Example:

[1, 2, 2]; // => 1^2 + 2^2 + 2^2 = 9.

*/

function sumOfSquareNumbers(arr: number[]) {
    return arr
    .map(num => Math.pow(num, 2))
    .reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)
}

const numbers = [1, 2, 2]

const result = sumOfSquareNumbers(numbers)

console.log(isRegularExpressionLiteral) // 1^2 + 2^2 + 2^2 = 9.