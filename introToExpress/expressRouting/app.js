var express = require('express');
var app = express();
var myPort = 3000;

// Home page route
app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!")
});

// Make noise of specific animal route
app.get("/speak/:animal", function (req, res) {
  var noise = "";
  switch (req.params.animal) {
    case "pig":
      noise = "Oink";
      break;
    case "cow":
      noise = "Moo";
      break;
    case "dog":
      noise = "woof Woof!";
      break;
    default:
      noise = "Go get a job!";
  };

  res.send("The " + req.params.animal + " says '" + noise + "'");
});

// repeat a phrase by a requested number of times route
app.get("/repeat/:phrase/:num", function (req, res) {
  var str = "";
  for (var i = 0; i < Number(req.params.num); i++) {
    str += " " + req.params.phrase;
  };
  res.send(str);
});

// If page doesnt exist display page not found
app.get("*", function (req, res) {
  res.send("Sorry, page not found... What are you doing with your life?");
});

// Tell Express to listen for requests (Start server)

app.listen(myPort, function () {
  console.log("server started on port " + myPort)
});