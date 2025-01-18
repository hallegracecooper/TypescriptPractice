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

// main.ts (continued)

function bubbleSort(arr: number[]): number[] {
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
  

  interface Geo {
    lat: string;
    lng: string;
  }
  
  interface Address {
    street: string;
    city: string;
    geo: Geo;
  }
  
  interface User {
    name: string;
    username: string;
    email: string;
    address: Address;
  }
  
  // Function to fetch and display user data
  async function fetchUserData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      const data: User[] = await response.json(); // Define 'data' as an array of 'User'
      console.log("Fetched User Data:");
      
      // Loop through each user and log their details
      data.forEach((user: User) => {  // Specify that 'user' is of type 'User'
        console.log(`Name: ${user.name}`);
        console.log(`Username: ${user.username}`);
        console.log(`Email: ${user.email}`);
        console.log(`Address: ${user.address.street}, ${user.address.city}`);
        console.log(`Geo: Latitude: ${user.address.geo.lat}, Longitude: ${user.address.geo.lng}`);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Call the asynchronous function to test it
  fetchUserData();
  