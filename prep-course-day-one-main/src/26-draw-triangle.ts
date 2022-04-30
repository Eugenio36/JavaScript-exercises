export { };

function draw(n: number) {
  let star = '*';
  for (let i = 0; i <= n; i++) {
    console.log(star.repeat(i));
  }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/

// DONE