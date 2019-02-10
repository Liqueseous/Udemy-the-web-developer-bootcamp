// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// Normal Requests
// var request = require('request');
// request('https://jsonplaceholder.typicode.com/users/1', (error, res, body) => {
//   if (!error && res.statusCode === 200) {
//     var parsedData = JSON.parse(body)
//     console.log(`${parsedData.name} lives in ${parsedData.address.city}`); //If no error and a successful response was sent then display the page
//   }

// });

// Request promises
var rp = require('request-promise');
rp('https://jsonplaceholder.typicode.com/users/1')
  .then((body) => {
    var parsedData = JSON.parse(body)
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
  })
  .catch((err) => {
    console.log('Error!', err);
  });