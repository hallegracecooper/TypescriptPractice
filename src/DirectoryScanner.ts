import * as fs from "fs";

export class DirectoryScanner {
    private directoryPath: string;

    constructor(directoryPath: string) {
        this.directoryPath = directoryPath;
    }

    public scan(): void {
        try {
            if (!fs.existsSync(this.directoryPath)) {
                throw new Error(`Directory not found: ${this.directoryPath}`);
            }
            console.log(`Scanning directory: ${this.directoryPath}`);
            // Simulate directory scan
            const files = fs.readdirSync(this.directoryPath);
            console.log("Files:", files);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error during directory scan:", error.message);
            } else {
                console.error("An unknown error occurred during directory scan.");
            }
        }
        
    }
}

// Example usage
const scanner = new DirectoryScanner("./nonexistent");
scanner.scan();
