export {};

/*
Exercise #22
Write a new function called swapCase that takes a string of words and capitalizes every second word starting from the first one.
*/

const swapCase = function (string) {
  const result = string
  .split(" ")
  .map((word, index) => index % 2 === 0 ? word.toUpperCase() : word)
  .join(" ")
  
  return console.log(result)
};


swapCase("hey gurl, lets javascript together sometime"); // => "HEY gurl, LETS javascript TOGETHER sometime"
