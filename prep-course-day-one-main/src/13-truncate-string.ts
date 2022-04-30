export {};

function truncateString(string: string, length: number) {
    return string.substr(0, length)
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE


// DONE