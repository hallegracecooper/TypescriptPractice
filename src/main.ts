// Importing NumberValidator class from the correct file
import { NumberValidator } from './NumberValidator';

// Person class to hold name and age
class Person {
    constructor(public name: string, public age: number) {}

    // Method to return the greeting string
    public getGreeting(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Function to validate a number using NumberValidator
function validateNumber(input: string): boolean {
    const validator = new NumberValidator();
    return validator.isValid(input);
}

// Main program
async function main() {
    const person = new Person("John Doe", 30); // Create a new Person object
    console.log(person.getGreeting()); // Output the greeting

    const number = "42"; // Example number to validate
    const isValid = validateNumber(number); // Validate the number

    if (isValid) {
        console.log(`Validated number: ${number}`); // Output the validated number
    } else {
        console.log("Invalid number input.");
    }
}

// Calling the main function
main();