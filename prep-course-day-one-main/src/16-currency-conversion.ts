export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

// You are allowed to change this function
function convertToUSD(price) {
    return price;
}
// You are allowed to change this function
function getForeignTaxedPrice(price){
    return price + price * 0.01;
}

function convertToBRL(price) {
    return getForeignTaxedPrice(price * 5.48335).toFixed(2);
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product); // Product name
console.log("Price in USD is: " + priceInUSD); // price in USD
console.log("Price in BRL is: " + priceInBRL); // price in BRL with 1% tax

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
// DONE