"use strict";
// src/Factorial.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    else {
        return n * factorial(n - 1); // Recursive case
    }
}
exports.factorial = factorial;
