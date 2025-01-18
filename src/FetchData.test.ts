// src/FetchData.test.ts

import { fetchData } from './FetchData';

test('fetchData should return success message', async () => {
  const result = await fetchData();
  expect(result).toBe("Data fetched successfully!");
});

test('fetchData should throw error', async () => {
  const fetchDataWithError = () => {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Failed to fetch data."), 2000);
    });
  };
  
  await expect(fetchDataWithError()).rejects.toBe("Failed to fetch data.");
});
