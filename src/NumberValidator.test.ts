// NumberValidator.test.ts
import NumberValidator from './NumberValidator';

describe('NumberValidator class tests', () => {
  it('should return the correct number when input is valid', () => {
    expect(NumberValidator.validateNumber('45')).toBe(45);
  });

  it('should throw error for invalid number input', () => {
    expect(() => {
      NumberValidator.validateNumber('invalid');
    }).toThrow('Invalid number input');
  });
});
