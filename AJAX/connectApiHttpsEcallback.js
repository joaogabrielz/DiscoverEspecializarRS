const https = require('https');

const API = 'https://jsonplaceholder.typicode.com/todos';

https.get(API, res => {
  console.log(res.statusCode);
})
console.log("Conectando API");