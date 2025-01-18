// NumberValidator.ts
class NumberValidator {
    static validateNumber(input: string): number {
      const parsedNumber = parseFloat(input);
      if (isNaN(parsedNumber)) {
        throw new Error('Invalid number input');
      }
      return parsedNumber;
    }
  }
  
  export default NumberValidator;
  