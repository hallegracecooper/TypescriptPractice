"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryScanner = void 0;
// coreLogic.ts
class DirectoryScanner {
    constructor(directoryPath) {
        this.directoryPath = directoryPath;
    }
    scan() {
        console.log(`Scanning directory: ${this.directoryPath}`);
        // Placeholder for scanning logic
    }
}
exports.DirectoryScanner = DirectoryScanner;
// Example usage
const scanner = new DirectoryScanner("/example/path");
scanner.scan();
