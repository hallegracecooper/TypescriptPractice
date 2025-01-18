"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValidator = void 0;
// NumberValidator.ts
class NumberValidator {
    isValid(input) {
        const regex = /^[0-9]+$/; // Simple regex for numeric validation
        return regex.test(input); // Return true if input matches regex, false otherwise
    }
}
exports.NumberValidator = NumberValidator;
