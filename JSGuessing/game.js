//create secret humber
var secretNumber = 4;
//ask user for guess
var guess = Number(prompt("Guess a number"));

//check if guess is right guess
if (guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
} else if (guess > secretNumber) {
  alert("Too High, try again");
} else {
  alert("Too Low, try again");
}