var h1 = document.querySelector("h1");

h1.style.color = "pink";

var body = document.querySelector("body"); //SELECT
var isBlue = false;

setInterval(function(){ //MANIPULATE
  if (isBlue) {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "#77abff";
  }

  isBlue = !isBlue;
}, 1000);