export {};

/* Exercise #2

As in Exercise #1 print a rectangle, but this time draw stars separated by a space.

Example:

> Enter the number:
> 3
* * *
* * *
* * *

*/

function rectangle(num) {

  let string = "";

  for (let i = 1; i <= num; ++i) {
    for (let j = 1; j <= num; ++j) {
      string += " * ";
    }
    string += "\n";
  }
  console.log(num + "\n" + string);
}

rectangle(3);
