export {};

function getNumber() {
  return Math.random() * 10;
}

const result = Math.floor(getNumber()); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}


// DONE