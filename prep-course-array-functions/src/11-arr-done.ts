export {};

/*

Exercise #11
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5); // => [0,1,2,3,4]

*/

const arr = num => new Array(num).fill(0).map((x, y) => x + y)

const result = (arr(5))

console.log(result);
