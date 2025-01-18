"use strict";
// main.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const NumberValidator_1 = __importDefault(require("./NumberValidator"));
// Create a Person object
const person = new Person_1.default('John Doe', 30);
console.log(person.greet());
// Validate number input
try {
    const number = NumberValidator_1.default.validateNumber('42');
    console.log(`Validated number: ${number}`);
}
catch (error) {
    // Type assertion: assert that the error is an instance of Error
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error('An unknown error occurred.');
    }
}
// Trying invalid number input
try {
    const invalidNumber = NumberValidator_1.default.validateNumber('abc');
    console.log(`Validated number: ${invalidNumber}`);
}
catch (error) {
    // Type assertion: assert that the error is an instance of Error
    if (error instanceof Error) {
        console.error(error.message); // Expected output: Invalid number input
    }
    else {
        console.error('An unknown error occurred.');
    }
}
