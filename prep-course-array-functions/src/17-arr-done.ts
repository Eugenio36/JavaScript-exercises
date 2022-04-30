export {};

/*
Exercise #17
Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
*/


const fiveCharactersOrFewerOnly = (arr: string[]) => arr.filter(word => word.length <= 5) 

const arrayOfStrings = ["dog", "wolf", "by", "family", "eaten", "camping"]

const result = fiveCharactersOrFewerOnly(arrayOfStrings)

console.log(result) // ["by", "dog", "wolf", "eaten"]