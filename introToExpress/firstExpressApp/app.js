var express = require('express');
var app = express();
var myPort = 3000;

// "/" => 'Hi There!'
app.get("/", function(req, res){
  console.log("/ request received");
  res.send("Hi there!");
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

// Tell Express to listen for requests (Start server)

app.listen(myPort, function(){
  console.log("server started on port " + myPort)
});