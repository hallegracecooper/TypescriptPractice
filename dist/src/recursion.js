"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = void 0;
// recursion.ts
function fibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
exports.fibonacci = fibonacci;
// Example call
console.log("Fibonacci(5):", fibonacci(5)); // Output: 5
