"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Factorial_1 = require("./Factorial");
describe("Factorial function tests", () => {
    test("Factorial of 5 should be 120", () => {
        expect((0, Factorial_1.factorial)(5)).toBe(120);
    });
    test("Factorial of 0 should be 1", () => {
        expect((0, Factorial_1.factorial)(0)).toBe(1);
    });
    test("Factorial of 1 should be 1", () => {
        expect((0, Factorial_1.factorial)(1)).toBe(1);
    });
    test("Factorial of 3 should be 6", () => {
        expect((0, Factorial_1.factorial)(3)).toBe(6);
    });
});
