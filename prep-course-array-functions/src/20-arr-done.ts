export {};

// Exercise #20
// Given an array of arrays, flatten them into a single array

const flatten = arr => arr.reduce((a, b) => a.concat(b), []);

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const result = flatten(arrays)

console.log(result); // ["1", "2", "3", true, 4, 5, 6];