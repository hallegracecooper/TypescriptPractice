"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManager = void 0;
class ListManager {
    constructor() {
        this.items = [];
    }
    // Add an item to the list
    add(item) {
        this.items.push(item);
    }
    // Remove an item from the list
    remove(item) {
        this.items = this.items.filter(i => i !== item);
    }
    // Get all items
    getItems() {
        return this.items;
    }
}
exports.ListManager = ListManager;
// Example usage
const listManager = new ListManager();
listManager.add("file1.txt");
listManager.add("file2.txt");
console.log("Current List:", listManager.getItems());
listManager.remove("file1.txt");
console.log("Updated List:", listManager.getItems());
