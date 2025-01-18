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
