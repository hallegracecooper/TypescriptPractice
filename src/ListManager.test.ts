import { ListManager } from "./ListManager";

describe("ListManager", () => {
    it("should add items to the list", () => {
        const manager = new ListManager<string>();
        manager.add("item1");
        manager.add("item2");
        expect(manager.getItems()).toEqual(["item1", "item2"]);
    });

    it("should remove items from the list", () => {
        const manager = new ListManager<string>();
        manager.add("item1");
        manager.add("item2");
        manager.remove("item1");
        expect(manager.getItems()).toEqual(["item2"]);
    });
});
