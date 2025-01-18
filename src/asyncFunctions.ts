// asyncFunctions.ts
export async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000); // Simulate 2-second delay
    });
  }
  
  // Example call
  async function run() {
    console.log("Fetching data...");
    const result = await fetchData();
    console.log(result);
  }
  
  run();
  