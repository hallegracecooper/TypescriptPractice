// coreLogic.ts
export class DirectoryScanner {
    private directoryPath: string;
  
    constructor(directoryPath: string) {
      this.directoryPath = directoryPath;
    }
  
    public scan(): void {
      console.log(`Scanning directory: ${this.directoryPath}`);
      // Placeholder for scanning logic
    }
  }
  
  // Example usage
  const scanner = new DirectoryScanner("/example/path");
  scanner.scan();
  