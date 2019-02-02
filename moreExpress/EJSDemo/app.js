var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("/fallinlovewith/:str", function (req, res) {
  res.render("love", {
    thingVar: req.params.str
  });
});

app.get("/posts", function (req, res) {
  var posts = [{
      title: "Milo the Biter",
      author: "Emily"
    },
    {
      title: "Barn News Daily",
      author: "Ryan"
    },
    {
      title: "I Like to Bite Ryan",
      author: "Skittles"
    }
  ];
  res.render("posts", {
    posts: posts
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});