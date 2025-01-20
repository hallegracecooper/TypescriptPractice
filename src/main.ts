// Importing required classes and functions
import { NumberValidator } from './NumberValidator';
import { promises as fs } from 'fs';  // Import fs/promises for async file system operations
import path from 'path';  // Import path module to work with file paths

// Person class to hold name and age
class Person {
    constructor(public name: string, public age: number) {}

    // Method to return the greeting string
    public getGreeting(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// DirectoryScanner class to handle directory traversal
class DirectoryScanner {
    private rootPath: string;

    constructor(rootPath: string) {
        this.rootPath = rootPath; // Initialize the rootPath for directory scanning
    }

    // Function to recursively print the directory structure in a tree-like format
    async printTree(dirPath: string = this.rootPath, indent: string = ''): Promise<void> {
        try {
            const files = await fs.readdir(dirPath, { withFileTypes: true });

            for (const file of files) {
                const fullPath = path.join(dirPath, file.name);

                if (file.isDirectory()) {
                    console.log(`${indent}${file.name}/`);
                    await this.printTree(fullPath, indent + '  ');
                } else {
                    console.log(`${indent}${file.name}`);
                }
            }
        } catch (err) {
            console.error(`Error reading directory: ${err}`);
        }
    }
}

// Function to validate a number using NumberValidator
export function validateNumber(input: string): boolean {
    const validator = new NumberValidator();
    return validator.isValid(input);
}

function handleError(error: Error) {
    console.error("Error:", error.message);
}

try {
    // Some code that might throw
} catch (error) {
    if (error instanceof Error) {
        handleError(error);
    }
}

// Main program with try-catch and error handling
export async function main() {
    try {
        const person = new Person("John Doe", 30); // Create a new Person object
        console.log(person.getGreeting()); // Output the greeting

        const number = "42"; // Example number to validate
        const isValid = validateNumber(number); // Validate the number

        if (isValid) {
            console.log(`Validated number: ${number}`); // Output the validated number
        } else {
            console.log("Invalid number input.");
        }

        // Example of throwing an error manually
        throw new Error("An unexpected error occurred in the main function.");
    } catch (error) {
        if (error instanceof Error) {
            handleError(error); // Call the error handler
        }
    }

    // Example usage of DirectoryScanner
    const scanner = new DirectoryScanner('./src'); // Replace with the actual path to start scanning
    await scanner.printTree(); // Print the directory structure
}

// Bubble Sort Algorithm
export function bubbleSort(arr: number[]): number[] {
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

// Fetch user data from an external API (JSONPlaceholder API)
export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    city: string;
    geo: Geo;
}

export interface User {
    name: string;
    username: string;
    email: string;
    address: Address;
}

// Function to fetch and display user data
export async function fetchUserData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json(); // Define 'data' as an array of 'User'
        console.log("Fetched User Data:");

        // Loop through each user and log their details
        data.forEach((user: User) => {
            console.log(`Name: ${user.name}`);
            console.log(`Username: ${user.username}`);
            console.log(`Email: ${user.email}`);
            console.log(`Address: ${user.address.street}, ${user.address.city}`);
            console.log(`Geo: Latitude: ${user.address.geo.lat}, Longitude: ${user.address.geo.lng}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching data:", error.message);
        } else {
            console.error("Unknown error occurred.");
        }
    }
}

// Factorial Function
export function factorial(n: number): number {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Test the bubble sort function with a sample array
const numbers = [5, 3, 8, 4, 2];
console.log("Before sorting:", numbers);
console.log("After sorting:", bubbleSort(numbers));

// Calling the main function
main();

// Call the asynchronous function to test it
fetchUserData();