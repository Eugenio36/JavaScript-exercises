export {};

/* Exercise #1

Print the rectange with a size of n x n where n is a number provided by user.

Example:

> Enter the number:
> 10
**********
**********
**********
**********
**********
**********
**********
**********
**********
**********

*/

function rectangle(num) {

  console.log(num)

  for(let i = 1; i <= num; i++){
    
    console.log('*'. repeat(num));
  }
}

rectangle(10);


/*



  function rectangle(num) {

  let string = "";

  for (let i = 1; i <= num; ++i) {
    for (let j = 1; j <= num; ++j) {
      string += "*";
    }
    string += "\n";
  }
  console.log(num + "\n" + string);
}

rectangle(10);

*/