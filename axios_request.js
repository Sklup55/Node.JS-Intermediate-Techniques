// Import the 'axios' module
const axios = require('axios');

// Make an HTTP GET request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log('GET Response:', response.data);
  })
  .catch((error) => {
    console.error('GET Error:', error);
  });

// Make an HTTP POST request
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1,
})
  .then((response) => {
    console.log('POST Response:', response.data);
  })
  .catch((error) => {
    console.error('POST Error:', error);
  });
