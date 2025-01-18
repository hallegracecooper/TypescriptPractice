"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Person.test.ts
const Person_1 = __importDefault(require("./Person"));
describe('Person class tests', () => {
    it('should return the correct greeting', () => {
        const person = new Person_1.default('Jane Doe', 25);
        expect(person.greet()).toBe('Hello, my name is Jane Doe and I am 25 years old.');
    });
});
