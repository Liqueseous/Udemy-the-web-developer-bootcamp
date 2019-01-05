var express = require('express');
var app = express();
var myPort = 3000;

// "/" => 'Hi There!'
app.get("/", function(req, res){
  console.log("/ request received");
  res.send("Hi there!");
});

// Route variable is preceeded by a :
app.get("/r/:subredditName", function(req, res){
  res.send("Welcome to the " + req.params.subredditName + " Subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  res.send("Welcome to a comment section of the " + req.params.title + " post on the " + req.params.subredditName + " Subreddit");
});

// "/bye" => 'Goodbye'
app.get("/bye", function(req, res){
  console.log("/bye request received");
  res.send("Goodbye");
});
// "/dog" => 'Meow!'
app.get("/dog", function(req, res){
  console.log("/dog request received");
  res.send("Meow!");
});

app.get("*", function(req, res){
  res.send("404 Page Not Found");
});

// Tell Express to listen for requests (Start server)

app.listen(myPort, function(){
  console.log("server started on port " + myPort)
});