export {};

/*
Exercise #16
Given an array of numbers, return a new array that only includes the even numbers.
*/

const evensOnly = (arr: number[]) => arr.filter(num => num % 2 === 0) 

const numbers = [3, 6, 8, 2]

const result = evensOnly(numbers)

console.log(result); /// [6, 8, 2]

