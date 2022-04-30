export {};

/*
Exercise #8
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example:

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/



function countPositivesSumNegatives(input: number[]) {
        if (!input || !input.length) return []

        let positiveNumCount = 0
        let negativeNumSum = 0

        input.forEach(num => num > 0 ? positiveNumCount++ : negativeNumSum += num)
        
        return [positiveNumCount, negativeNumSum]
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

const result = countPositivesSumNegatives(numbers)

console.log(result) // Output: [10, -65]

