export {};

// Exercise #3
// Take an array of numbers and make them strings.

function stringItUp(arr) {
  return arr.join(', ')
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]