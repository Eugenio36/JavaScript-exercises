export {};

// Exercise #4
// Capitalize each of an array of names.

const capitalizeNames = arr => arr.map( a => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() );

const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

console.log(capitalizeNames(arr)); // ["John", "Jacob", "Jingleheimer", "Schmidt"]