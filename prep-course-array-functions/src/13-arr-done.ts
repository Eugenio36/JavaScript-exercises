export {};

/*

Exercise #13
Turn an array of numbers into a total of all the numbers.

*/


const total = arr => arr.reduce((previusValue: number, currentValue: number) => previusValue + currentValue, 0)

const numbers = [1, 2, 3]

const result = total(numbers)

console.log(result); // 6



