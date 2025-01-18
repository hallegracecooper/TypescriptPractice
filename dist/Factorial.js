// src/Factorial.ts
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    else {
        return n * factorial(n - 1); // Recursive case
    }
}
var num = 5; // You can change this number for testing
console.log("Factorial of ".concat(num, ": ").concat(factorial(num)));
