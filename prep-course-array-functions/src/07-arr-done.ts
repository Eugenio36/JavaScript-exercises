import { createSourceFile } from "typescript";

export {};

/* 

Exercise #7
You get an array of numbers, return the sum of all of the positives ones.

Example:
[1, -4, 7, 12]; // => 1 + 7 + 12 = 20

*/


function sumOfPositiveNumbers(arr: number[]) {
    return arr
    .filter(number => number > 0) // [1, 7, 12];
    .reduce((previusValue: number, currentValue: number) => previusValue + currentValue, 0)
}

const numbers = [1, -4, 7, 12]

const result = sumOfPositiveNumbers(numbers)

console.log (result) // Output: 20
