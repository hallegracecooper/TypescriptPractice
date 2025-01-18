"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Person.ts
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
exports.default = Person;
