"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListManager_1 = require("./ListManager");
describe("ListManager", () => {
    it("should add items to the list", () => {
        const manager = new ListManager_1.ListManager();
        manager.add("item1");
        manager.add("item2");
        expect(manager.getItems()).toEqual(["item1", "item2"]);
    });
    it("should remove items from the list", () => {
        const manager = new ListManager_1.ListManager();
        manager.add("item1");
        manager.add("item2");
        manager.remove("item1");
        expect(manager.getItems()).toEqual(["item2"]);
    });
});
