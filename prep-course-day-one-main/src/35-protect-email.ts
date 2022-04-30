export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email) {
    return email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")
     
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
