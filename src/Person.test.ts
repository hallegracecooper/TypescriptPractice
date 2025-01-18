// Person.test.ts
import Person from './Person';

describe('Person class tests', () => {
  it('should return the correct greeting', () => {
    const person = new Person('Jane Doe', 25);
    expect(person.greet()).toBe('Hello, my name is Jane Doe and I am 25 years old.');
  });
});