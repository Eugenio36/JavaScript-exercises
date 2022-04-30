export {};

/*
Exercise #14
Turn an array of numbers into a long string of all those numbers.
*/

const stringConcat = arr => arr.reduce((a, b) => a + b, '');

const numbers = [1, 2, 3, 4, 5, 6]

const result = stringConcat(numbers)

console.log(result); // "123456"
