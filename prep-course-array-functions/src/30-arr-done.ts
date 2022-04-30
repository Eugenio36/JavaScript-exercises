export {};

/*

Exercise #30
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1); // => [1]

*/

const monkeyCount = num => new Array(num).fill(0).map((_, i) => i + 1);

const result1 = monkeyCount(10)
const result2 = monkeyCount(1)

console.log(result1) // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(result2) // => [1]


/*

let monkeys = []
    for (let i = 1; i <= num; i++) {
        monkeys.push(i)
    }
    return console.log(monkeys)

*/