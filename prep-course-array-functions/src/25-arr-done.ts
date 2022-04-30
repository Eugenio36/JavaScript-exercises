export {};

// Exercise #25
// Write a function that takes a string and a target, and returns true or false if the target is present in the string.

const isPresent = (string, target) => string.includes(target)

const result1 = isPresent("abcd", "b")
const result2 = isPresent("efghi", "a")

console.log(result1); // => true
console.log(result2); // => false
