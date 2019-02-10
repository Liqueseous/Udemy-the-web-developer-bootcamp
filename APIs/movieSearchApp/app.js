// &apikey=thewdb
var express = require('express');
var app = express();
var request = require('request');
// debugging stop
var stop = require('locus'); 
var myPort = 3000;

// set default page extension to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect('/search');
});

app.get('/search', (req, res) => {
  res.render('search');
});

// show results of search route
app.get('/results', (req, res) => {
  request("http://www.omdbapi.com/?apikey=thewdb&s=star%20wars", (error, response, body) => {
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render('results', {data: data});
    };
  });
});

app.listen(myPort, function(){
  console.log(`Movie App started on port ${myPort}`)
});