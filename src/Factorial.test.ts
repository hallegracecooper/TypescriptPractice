import { factorial } from './Factorial';

describe("Factorial function tests", () => {
    test("Factorial of 5 should be 120", () => {
        expect(factorial(5)).toBe(120);
    });

    test("Factorial of 0 should be 1", () => {
        expect(factorial(0)).toBe(1);
    });

    test("Factorial of 1 should be 1", () => {
        expect(factorial(1)).toBe(1);
    });

    test("Factorial of 3 should be 6", () => {
        expect(factorial(3)).toBe(6);
    });
});