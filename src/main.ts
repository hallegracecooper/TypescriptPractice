// main.ts

import Person from './Person';
import NumberValidator from './NumberValidator';

// Create a Person object
const person = new Person('John Doe', 30);
console.log(person.greet());

// Validate number input
try {
  const number = NumberValidator.validateNumber('42');
  console.log(`Validated number: ${number}`);
} catch (error: unknown) {
  // Type assertion: assert that the error is an instance of Error
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('An unknown error occurred.');
  }
}

// Trying invalid number input
try {
  const invalidNumber = NumberValidator.validateNumber('abc');
  console.log(`Validated number: ${invalidNumber}`);
} catch (error: unknown) {
  // Type assertion: assert that the error is an instance of Error
  if (error instanceof Error) {
    console.error(error.message);  // Expected output: Invalid number input
  } else {
    console.error('An unknown error occurred.');
  }
}