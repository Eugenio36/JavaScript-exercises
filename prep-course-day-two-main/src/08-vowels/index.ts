/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const VOWELS = "aeiou";

function vowels(s: string): number {
    const vowels = s
    .toLowerCase()
    .split("")
    .filter(letter => VOWELS.includes(letter))
    return vowels.length;
    
}

export { vowels };
