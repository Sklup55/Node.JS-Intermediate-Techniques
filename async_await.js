// Import the 'fs' module
const fs = require('fs');

// Create an async function to read a file using async/await
const readFileAsync = async (fileName) => {
  try {
    const data = await fs.promises.readFile(fileName, 'utf8');
    console.log('File Contents:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Usage of the async function
readFileAsync('sample-02.txt');
