// JSON data
const jsonData = '{"name": "John", "age": 30, "city": "New York"}';

// Parse JSON to JavaScript object
const parsedData = JSON.parse(jsonData);
console.log('Parsed JSON:', parsedData);

// JavaScript object to JSON string
const jsonString = JSON.stringify(parsedData);
console.log('JSON String:', jsonString);
