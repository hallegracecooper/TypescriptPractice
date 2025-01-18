"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing NumberValidator class from the correct file
const NumberValidator_1 = require("./NumberValidator");
// Person class to hold name and age
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to return the greeting string
    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
// Function to validate a number using NumberValidator
function validateNumber(input) {
    const validator = new NumberValidator_1.NumberValidator();
    return validator.isValid(input);
}
// Main program
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const person = new Person("John Doe", 30); // Create a new Person object
        console.log(person.getGreeting()); // Output the greeting
        const number = "42"; // Example number to validate
        const isValid = validateNumber(number); // Validate the number
        if (isValid) {
            console.log(`Validated number: ${number}`); // Output the validated number
        }
        else {
            console.log("Invalid number input.");
        }
    });
}
// Calling the main function
main();
// main.ts (continued)
function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
// Test the bubble sort function with a sample array
const numbers = [5, 3, 8, 4, 2];
console.log("Before sorting:", numbers);
console.log("After sorting:", bubbleSort(numbers));
// Function to fetch and display user data
function fetchUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://jsonplaceholder.typicode.com/users";
        try {
            const response = yield fetch(url);
            const data = yield response.json(); // Define 'data' as an array of 'User'
            console.log("Fetched User Data:");
            // Loop through each user and log their details
            data.forEach((user) => {
                console.log(`Name: ${user.name}`);
                console.log(`Username: ${user.username}`);
                console.log(`Email: ${user.email}`);
                console.log(`Address: ${user.address.street}, ${user.address.city}`);
                console.log(`Geo: Latitude: ${user.address.geo.lat}, Longitude: ${user.address.geo.lng}`);
            });
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    });
}
// Call the asynchronous function to test it
fetchUserData();
