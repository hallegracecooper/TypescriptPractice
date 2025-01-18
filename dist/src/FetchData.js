"use strict";
// src/FetchData.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Failed to fetch data.");
            }
        }, 2000); // Simulate 2-second delay for API call
    });
}
exports.fetchData = fetchData;
fetchData()
    .then((data) => {
    console.log(data); // This should output success message
})
    .catch((error) => {
    console.error(error); // This should output error message if failure
});
