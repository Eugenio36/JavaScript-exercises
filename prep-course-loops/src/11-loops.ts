export {};

/*

Exercise #11
Example:

> Enter the number:
> 5
A
B B
C C C
D D D D
E E E E E

*/

function letters(n) {

  let string = "";

  // External loop
  for (let i = 1; i <= n; i++) {
  
    // printing characters
    for (let j = 0; j < i; j++) {
      string += String.fromCharCode((i - 1) + 65) + " ";
    }
    string += "\n";
  }
  console.log(string);
}

letters(5);
