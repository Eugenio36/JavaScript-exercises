export {};

/*

Exercise #12
Gven a random non-negative number, you have to return the digits of this number within ian array in reverse order.

348597; // => [7,9,5,8,4,3]

*/

function digitize(num) {
    return num
    .toString()
    .split('')
    .reverse()
    .map(Number);
}

const number = 348597

const result = digitize(number)

console.log(result)