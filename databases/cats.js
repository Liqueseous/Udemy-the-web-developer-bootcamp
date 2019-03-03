var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model('Cat', catSchema);
// adding a new cat to the database

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });

// george.save((err, cat) => {
//   if(err){
//     console.log("Something went Wrong!");
//   } else {
//     console.log("Cat has been saved");
//     console.log(cat);
//   }
// });

// create is new and save together
// Cat.create({
//   name: "Snow White",
//   age: 15,
//   temperament: "Bland"
// }, (err, cat) => {
//   if(err){
//     console.log("Something Happened");
//     console.log(err);
//   } else {
//     console.log("Cat saved successfully");
//     console.log(cat);
//   };
// });
// retrieve all cats from the database and console.log each one

Cat.find({}, (err, cats) => {
  if(err){
    console.log("Something Happened");
    console.log(err);
  } else {
    console.log("All the Cats");
    console.log(cats);
  };
});