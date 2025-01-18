// src/Factorial.ts

export function factorial(n: number): number {  // Ensure this line has the 'export' keyword
    if (n === 0 || n === 1) {
      return 1; // Base case: factorial of 0 or 1 is 1
    } else {
      return n * factorial(n - 1); // Recursive case
    }
  }
  