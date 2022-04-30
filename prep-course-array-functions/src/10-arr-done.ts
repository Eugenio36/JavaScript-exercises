export {};
/*
Exercise #10

Write a method, that will get an integer array as parameter and will process every number from this array. 
Return a new array with processing every number of the input-array like this:

[4, 3, 9, 7, 2, 1]; // => [2,9,3,49,4,1]
If the number has an integer square root, take this, otherwise square the number.

The input array should not be modified!

*/

function arrayProcessing(arr) {
  return arr.map((num) => {
    if (num > 0 && Math.sqrt(num) % 1 === 0) {
      return Math.sqrt(num);
    } 
      return Math.pow(num, 2);
  });
}

const numbers = [4, 3, 9, 7, 2, 1]

const result = arrayProcessing(numbers)

console.log(result)

