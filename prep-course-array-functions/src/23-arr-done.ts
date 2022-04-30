export {};

/*
Exercise #23
Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the alphabet by one.

Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use Ascii code to acomplish this.
*/

const shiftLetters = function (string) {
  const result = string
  .split(" ")                                                                               // [ 'hello' ]
  .map(word => word.split("")                                                               // [ 'h', 'e', 'l', 'l', 'o' ]
  .map(letter => String.fromCharCode((letter.charCodeAt() + 1))).join(""))                  // [ 'i f m m p' ] 
  .join(" ")                                                                                // ifmmp
  return console.log(result)                                                               
};

shiftLetters("hello"); // => 'ifmmp'
shiftLetters("abcxyz"); // => "bcdyz{"