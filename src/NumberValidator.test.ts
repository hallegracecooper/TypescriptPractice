import { NumberValidator } from './NumberValidator'; // Use named import

describe('NumberValidator class tests', () => {
  let validator: NumberValidator;

  beforeAll(() => {
    validator = new NumberValidator(); // Instantiate the NumberValidator class
  });

  it('should return true when input is a valid number', () => {
    expect(validator.isValid('45')).toBe(true); // Call the isValid method directly
  });

  it('should return false for invalid number input', () => {
    expect(validator.isValid('invalid')).toBe(false); // Invalid input
  });
});
