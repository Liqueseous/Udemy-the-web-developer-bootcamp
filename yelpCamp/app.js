var app = require('express')();
var bodyParser = require('body-parser');
var myport = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
  {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
  {name: "Mountain Heights", image: "https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
  {name: "Granite Hill", image: "https://farm4.staticflickr.com/3911/14707566622_af236f9b65.jpg"}
]

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res) => {
  // get data from form and add to campgrounds array
  campgrounds.push({name: req.body.name, image: req.body.image});
  // redirect back to campgrounds page
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
  res.render("new.ejs");
});

app.listen(myport, () => {
  console.log(`app started on port ${myport}`)
});