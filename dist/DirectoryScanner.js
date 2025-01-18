"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryScanner = void 0;
const fs = require("fs");
class DirectoryScanner {
    constructor(directoryPath) {
        this.directoryPath = directoryPath;
    }
    scan() {
        try {
            if (!fs.existsSync(this.directoryPath)) {
                throw new Error(`Directory not found: ${this.directoryPath}`);
            }
            console.log(`Scanning directory: ${this.directoryPath}`);
            // Simulate directory scan
            const files = fs.readdirSync(this.directoryPath);
            console.log("Files:", files);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Error during directory scan:", error.message);
            }
            else {
                console.error("An unknown error occurred during directory scan.");
            }
        }
    }
}
exports.DirectoryScanner = DirectoryScanner;
// Example usage
const scanner = new DirectoryScanner("./nonexistent");
scanner.scan();
