// src/FetchData.ts

export function fetchData(): Promise<string> {  // Ensure this line has the 'export' keyword
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000); // Simulate 2-second delay for API call
    });
  }  
  
  fetchData()
    .then((data) => {
      console.log(data); // This should output success message
    })
    .catch((error) => {
      console.error(error); // This should output error message if failure
    });
  