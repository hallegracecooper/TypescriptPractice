"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
exports.factorial = factorial;
