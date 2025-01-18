# TypeScriptPractice: Directory Scanner Project

## Project Overview
The Directory Scanner Project is a TypeScript-based program designed to recursively scan directories, list their contents, and handle various file operations asynchronously. This project demonstrates key TypeScript functionalities, including recursion, classes, lists, asynchronous functions, and exception handling.

## Features
- **Recursive Functionality**: Handles directory scanning by traversing nested folders.
- **Classes**: Encapsulates the logic in a `DirectoryScanner` class for modular and reusable code.
- **Asynchronous Functions**: Simulates fetching data asynchronously to showcase async/await capabilities.
- **Error Handling**: Demonstrates throwing and catching exceptions (planned for later).
- **TSLint Integration**: Ensures code quality and adheres to TypeScript best practices (planned for later).

---

## Progress Update

### Week 1: Monday
**Setup Tasks**
- Initialized the project folder structure with TypeScript.
- Installed necessary tools and dependencies: `TypeScript`, `TSLint`, and `Node.js`.
- Configured `tsconfig.json` for TypeScript compilation and `tslint.json` for linting.
- Added the following files:
  - `src` folder for source code.
  - `dist` folder for compiled output.
  - Starter `README.md` file.
  - Installed `jest` for testing (planned for future tasks).

---

### Week 1: Tuesday
**Core Features Implemented**
1. **Recursive Functionality**  
   - Wrote a `fibonacci` function to demonstrate recursion.
   - Example code:
     ```typescript
     export function fibonacci(n: number): number {
       if (n <= 1) return n;
       return fibonacci(n - 1) + fibonacci(n - 2);
     }

     console.log("Fibonacci(5):", fibonacci(5)); // Output: 5
     ```

2. **Classes**  
   - Created a `DirectoryScanner` class for directory traversal.
   - Example code:
     ```typescript
     export class DirectoryScanner {
       private directoryPath: string;

       constructor(directoryPath: string) {
         this.directoryPath = directoryPath;
       }

       public scan(): void {
         console.log(`Scanning directory: ${this.directoryPath}`);
       }
     }

     const scanner = new DirectoryScanner("/example/path");
     scanner.scan();
     ```

3. **Asynchronous Functions**  
   - Simulated a `fetchData` function to showcase `async/await`.
   - Example code:
     ```typescript
     export async function fetchData(): Promise<string> {
       return new Promise((resolve) => {
         setTimeout(() => {
           resolve("Data fetched successfully!");
         }, 2000);
       });
     }

     async function run() {
       console.log("Fetching data...");
       const result = await fetchData();
       console.log(result);
     }

     run();
     ```

4. **Documentation**  
   - Updated `README.md` with examples and progress updates.

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/TypeScriptPractice.git


### Week 1: Wednesday
**Tasks Completed**:
- Implemented the `ListManager` class for list handling, with methods to add, remove, and retrieve items.
- Enhanced the `DirectoryScanner` class with exception handling to manage errors during directory scans.
- Set up Jest for unit testing and wrote tests for the `ListManager` class.

**Key Code Examples**:
- Exception Handling in `DirectoryScanner`:
  ```typescript
  public scan(): void {
      try {
          if (!fs.existsSync(this.directoryPath)) {
              throw new Error(`Directory not found: ${this.directoryPath}`);
          }
          console.log(`Scanning directory: ${this.directoryPath}`);
      } catch (error) {
          console.error("Error during directory scan:", error.message);
      }
  }


## Week 1 - Thursday Work Log

### Tasks Completed:
1. **Implemented Asynchronous Function**
   - Created an asynchronous function `fetchData()` to simulate fetching data from an API with a 2-second delay using `setTimeout`.
   - The function resolves with a success message and rejects with an error message.
   - Used `then()` and `catch()` for handling success and error responses.
   
   **Expected Output**:
   ```plaintext
   Data fetched successfully!

   # Week 1 - Friday Work Log

### Tasks Completed:
1. **Implemented TypeScript Classes**
   - Created a `Person` class with `name` and `age` properties and a `greet()` method.
   
2. **Exception Handling**
   - Created a `NumberValidator` class to validate whether a string input is a valid number.
   - Used `try` and `catch` blocks to handle exceptions.

3. **Created `main.ts`**
   - Used the `Person` and `NumberValidator` classes in `main.ts`.
   - Demonstrated object creation, method usage, and exception handling.

4. **Added Jest Tests**
   - Created unit tests for `Person` class and `NumberValidator` class.
   - Tested the functionality of both classes and confirmed everything passed.

### Outputs:
- After running `node dist/main.js`, the output was:
  ```plaintext
  Hello, my name is John Doe and I am 30 years old.
  Validated number: 42
  Invalid number input


### Day 5 - Saturday Work (Week 1)

- **Implemented Asynchronous Functionality:**
  - Added an `async` method `displayInfo()` to the `Person` class. This method simulates a delayed greeting by using `setTimeout` and promises.
  - After calling `displayInfo()`, the program waits for the asynchronous operation to complete before validating a number.

- **Code Update:**
  - Updated `main.ts` to demonstrate asynchronous handling and number validation.
  
- **Terminal Commands Run:**
  1. `npx tsc` (to compile the updated TypeScript code)
  2. `node dist/main.js` (to run the JavaScript output from the compiled TypeScript)
  
- **Expected Output:**
  ```plaintext
  Hello, my name is John Doe and I am 30 years old.
  Validated number: 42

  