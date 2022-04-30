export {};

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 * 
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

const fahrenheitToCelsius = n => (n - 32) / 1.8;


const celsiusToFahrenheit = m => (m * 1.8) + 32;


console.log(fahrenheitToCelsius(32).toFixed()); // Expected result: 0

console.log(celsiusToFahrenheit(0).toFixed()); // Expected result: 32


// DONE