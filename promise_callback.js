// Import the 'fs' module
const fs = require('fs');

// Create a promise to read a file
const readFilePromise = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Usage of the promise
readFilePromise('modified.txt')
  .then((data) => {
    console.log('File Contents:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
