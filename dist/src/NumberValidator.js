"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NumberValidator.ts
class NumberValidator {
    static validateNumber(input) {
        const parsedNumber = parseFloat(input);
        if (isNaN(parsedNumber)) {
            throw new Error('Invalid number input');
        }
        return parsedNumber;
    }
}
exports.default = NumberValidator;
