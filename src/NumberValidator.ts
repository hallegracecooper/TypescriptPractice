// NumberValidator.ts
export class NumberValidator {
    public isValid(input: string): boolean {
        const regex = /^[0-9]+$/; // Simple regex for numeric validation
        return regex.test(input); // Return true if input matches regex, false otherwise
    }
}

  