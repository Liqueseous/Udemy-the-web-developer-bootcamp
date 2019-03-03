var bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  express = require('express'),
  app = express(),
  myPort = 3000;

// APP CONFIG
mongoose.connect('mongodb://127.0.0.1:27017/restful_blog_app', {
  useNewUrlParser: true
});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  }
})
var Blog = mongoose.model('Blog', blogSchema);

// TEST BLOG POST CREATION
// Blog.create({
//   title: "Test Blog",
//   image: "https://images.unsplash.com/photo-1551500226-b50b653e33e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//   body: "THIS IS A TEST BLOG!!!"
// }, (err, post) => {
//   if (err) {
//     console.log("Blog post creation failed");
//   } else {
//     console.log("Post created successfully");
//     console.log(post);
//   }
// });

// RESTFUL ROUTES
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log("SOMETHING HAPPENED!");
    } else {
      res.render('index', {
        blogs: blogs
      });
    };
  });
});

// APP RUNTIME
app.listen(myPort, () => {
  console.log(`app started on port ${myPort}`)
});