export {};

const removeFromArray = function(arr, ...rest) {
    return arr.filter(element => !rest.includes(element))
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]
console.log(removeFromArray([1, 2, 3, 4, 5], 7, 2, 5)); // Expected output: [1, 3, 4]

// DONE