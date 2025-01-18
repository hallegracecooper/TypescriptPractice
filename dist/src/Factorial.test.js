"use strict";
// src/Factorial.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Factorial_1 = require("./Factorial");
test('factorial of 5 should be 120', () => {
    expect((0, Factorial_1.factorial)(5)).toBe(120);
});
test('factorial of 0 should be 1', () => {
    expect((0, Factorial_1.factorial)(0)).toBe(1);
});
