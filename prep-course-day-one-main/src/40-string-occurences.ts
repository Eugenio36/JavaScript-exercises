export {};

const count = (sentence, word) => {
    let regExp = new RegExp(word, "gi");
    return (sentence.match(regExp) || []).length
}

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1

// DONE