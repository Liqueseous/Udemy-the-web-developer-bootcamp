var app = require('express')(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');
var myport = 3000;

// CONNECT DB
mongoose.connect('mongodb://127.0.0.1:27017/yelp_camp', {
  useNewUrlParser: true
});

// ENABLE PASSING OF JSON THROUGH THE URL PARAMETERS
app.use(bodyParser.urlencoded({
  extended: true
}));
// SET DEFAULT FILE TYPE FOR VIEWS
app.set('view engine', 'ejs');

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// HOME ROUTE, RENDER LANDING PAGE
app.get('/', (req, res) => {
  res.render('landing');
});

// INDEX -- show all campgrounds
// RENDER CAMPGROUNDS PAGE POPULATED WITH CAMPGROUNDS FROM DB
app.get('/campgrounds', (req, res) => {
  // Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log("Something Bad Happened");
      console.log(err);
    } else {
      res.render('index', {campgrounds: allCampgrounds});
    };
  });

});

// CREATE -- add new campground to the DB
// CREATE NEW CAMPGROUND IN DB THEN REDIRECT BACK TO CAMPGROUNDS PAGE
app.post('/campgrounds', (req, res) => {
  // get data from form and add to campgrounds database
  Campground.create({
    name: req.body.name,
    image: req.body.image,
    description: req.body.desc
  }, (err, campground) => {
    if (err) {
      console.log("Something Bad Happened");
      console.log(err);
    } else {
      console.log("Campground Successfully created");
      console.log(campground);  
      // redirect back to campgrounds page once the campground has been created
      res.redirect('/campgrounds');
    };
  });

});

// NEW -- displays form to make new campground
// RENDER NEW CAMPGROUND FORM
app.get('/campgrounds/new', (req, res) => {
  res.render("new.ejs");
});

// SHOW -- show more detailed info for the campground with ID
app.get('/campgrounds/:id', (req, res) => {
  // find the campground with the provided id
  Campground.findById(req.params.id, (err, foundCampground) => {
    if(err){
      console.log(err);
    } else {
      res.render("show", {campground: foundCampground});
    };
  });
});

// APP RUNTIME
app.listen(myport, () => {
  console.log(`app started on port ${myport}`)
});