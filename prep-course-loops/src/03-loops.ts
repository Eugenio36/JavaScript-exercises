export {};

/* Exercise #3

Example:

> Enter the number:
> 5
*****
*   *
*   *
*   *
*****

Steps to create a hollow square star pattern are:

1. Create a variable to store the string and assign it with an empty string
2. Create a for loop to run for 'n' number of times, where 'n' is number of rows/columns in the square, i.e for(let i = 0; i < n; i++)
3. Inside the loop, create a for loop that prints a star (*) at beginning and end of the line and space in between
4. Also, keep in mind that the first and last row should have only stars
5. Add a new line after each row

*/

function rectangle(num) {

  let string = "";

for(let i = 0; i < num; i++) { // external loop
  for(let j = 0; j < num; j++) { // internal loop
    if(i === 0 || i === num - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === num - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
}

rectangle(5);
