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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = exports.fetchUserData = exports.bubbleSort = exports.main = exports.validateNumber = void 0;
// Importing required classes and functions
const NumberValidator_1 = require("./NumberValidator");
const fs_1 = require("fs"); // Import fs/promises for async file system operations
const path_1 = __importDefault(require("path")); // Import path module to work with file paths
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
// DirectoryScanner class to handle directory traversal
class DirectoryScanner {
    constructor(rootPath) {
        this.rootPath = rootPath; // Initialize the rootPath for directory scanning
    }
    // Function to recursively print the directory structure in a tree-like format
    printTree(dirPath = this.rootPath, indent = '') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const files = yield fs_1.promises.readdir(dirPath, { withFileTypes: true });
                for (const file of files) {
                    const fullPath = path_1.default.join(dirPath, file.name);
                    if (file.isDirectory()) {
                        console.log(`${indent}${file.name}/`);
                        yield this.printTree(fullPath, indent + '  ');
                    }
                    else {
                        console.log(`${indent}${file.name}`);
                    }
                }
            }
            catch (err) {
                console.error(`Error reading directory: ${err}`);
            }
        });
    }
}
// Function to validate a number using NumberValidator
function validateNumber(input) {
    const validator = new NumberValidator_1.NumberValidator();
    return validator.isValid(input);
}
exports.validateNumber = validateNumber;
function handleError(error) {
    console.error("Error:", error.message);
}
try {
    // Some code that might throw
}
catch (error) {
    if (error instanceof Error) {
        handleError(error);
    }
}
// Main program with try-catch and error handling
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
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
            // Example of throwing an error manually
            throw new Error("An unexpected error occurred in the main function.");
        }
        catch (error) {
            if (error instanceof Error) {
                handleError(error); // Call the error handler
            }
        }
        // Example usage of DirectoryScanner
        const scanner = new DirectoryScanner('./src'); // Replace with the actual path to start scanning
        yield scanner.printTree(); // Print the directory structure
    });
}
exports.main = main;
// Bubble Sort Algorithm
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
exports.bubbleSort = bubbleSort;
// Function to fetch and display user data
function fetchUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://jsonplaceholder.typicode.com/users";
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
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
            if (error instanceof Error) {
                console.error("Error fetching data:", error.message);
            }
            else {
                console.error("Unknown error occurred.");
            }
        }
    });
}
exports.fetchUserData = fetchUserData;
// Factorial Function
function factorial(n) {
    if (n === 0)
        return 1;
    return n * factorial(n - 1);
}
exports.factorial = factorial;
// Test the bubble sort function with a sample array
const numbers = [5, 3, 8, 4, 2];
console.log("Before sorting:", numbers);
console.log("After sorting:", bubbleSort(numbers));
// Calling the main function
main();
// Call the asynchronous function to test it
fetchUserData();
