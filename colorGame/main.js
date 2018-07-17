// Color Game Javascript file
var colors = generateRandomColors(6);
var easyBtn = $("#easyBtn");
var hardBtn = $("#hardBtn");
var pickedColor = colorPicker();
var clicked = null;

$("#colorDisplay").text(pickedColor);

updateSquares();

$(".square").click(function () {
  clicked = colors[$(".square").index(this)];

  if (clicked === pickedColor) {
    $("#message").text("Correct!");
    changeColors(clicked);
    $("#reset").text("Play Again?");
    // Change Banner Color
    $("h1").css("background-color", clicked);
  } else {
    $(this).css("background-color", "#232323");
    $("#message").text("Try Again");
  }
});

$("#resetBtn").click(function() {
  // generate all new colors
  colors = generateRandomColors(6);
  // pick new random color
  pickedColor = colorPicker();
  // change color display to match picked color
  $("#colorDisplay").text(pickedColor);
  // change color of squares
  updateSquares();
  $("h1").css("background-color", "#232323");
});

easyBtn.click(function() {
  hardBtn.removeClass("selected");
  easyBtn.addClass("selected");
});

hardBtn.click(function() {
  easyBtn.removeClass("selected");
  hardBtn.addClass("selected");
});

function updateSquares() {
  $(".square").each(function (i) {
    $(this).css("background-color", colors[i]);
  });
}

function changeColors(color) {
  $(".square").each(function (index) {
    $(this).css("background-color", color);
  });
};

function colorPicker() {
  return colors[Math.floor(Math.random() * colors.length)];
};

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  };
  // return the array
  return arr;
};

function randomColor() {
  // pick a "red" from 0 to 255
  var red = Math.floor(Math.random() * 256);
  // pick a "green" from 0 to 255
  var green = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 to 255
  var blue = Math.floor(Math.random() * 256);

  return "rgb( " + red + ", " + green + ", " + blue + ")";
};