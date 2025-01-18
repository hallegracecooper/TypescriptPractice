"use strict";
// src/FetchData.test.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const FetchData_1 = require("./FetchData");
test('fetchData should return success message', () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, FetchData_1.fetchData)();
    expect(result).toBe("Data fetched successfully!");
}));
test('fetchData should throw error', () => __awaiter(void 0, void 0, void 0, function* () {
    const fetchDataWithError = () => {
        return new Promise((_, reject) => {
            setTimeout(() => reject("Failed to fetch data."), 2000);
        });
    };
    yield expect(fetchDataWithError()).rejects.toBe("Failed to fetch data.");
}));
