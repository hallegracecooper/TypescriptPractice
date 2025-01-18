export class ListManager<T> {
    private items: T[] = [];

    // Add an item to the list
    public add(item: T): void {
        this.items.push(item);
    }

    // Remove an item from the list
    public remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    // Get all items
    public getItems(): T[] {
        return this.items;
    }
}

// Example usage
const listManager = new ListManager<string>();
listManager.add("file1.txt");
listManager.add("file2.txt");
console.log("Current List:", listManager.getItems());
listManager.remove("file1.txt");
console.log("Updated List:", listManager.getItems());
