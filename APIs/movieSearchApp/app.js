// &apikey=thewdb
var express = require('express');
var app = express();
var request = require('request');
// debugging stop
var stop = require('locus'); 
var myPort = 3000;

// set default page extension to ejs
app.set('view engine', 'ejs');

// Redirect to search page
app.get('/', (req, res) => {
  res.redirect('/search');
});

// search for a movie
app.get('/search', (req, res) => {
  res.render('search');
});

// show results of search route
app.get('/results', (req, res) => {
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query
  
  request(url, (error, response, body) => {
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render('results', {data: data});
    };
  });
});

app.listen(myPort, function(){
  console.log(`Movie App started on port ${myPort}`)
});