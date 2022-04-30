export {};

/*
Exercise #15
Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
*/

const fiveAndGreaterOnly = (arr: number[]) => arr.filter(num => num >= 5)

const numbers = [3, 6, 8, 2]

const result = fiveAndGreaterOnly(numbers)

console.log(result) /// [6, 8]

