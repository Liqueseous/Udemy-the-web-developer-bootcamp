// Color Game Javascript file
// How many squares we have
var numSquares = 6;
// Array of Colors
var colors = [];
// color that is picked
var pickedColor;
// Color that was clicked by user
var clicked;

// Initialize the game
init();

// Initialize function
function init() {
  // square button listener
  squareBtnInit();
  // reset button listener
  resetBtnInit();
  // mode button listener
  modeBtnInit();
  // update game
  reset();
};

function squareBtnInit() {
  // Click on a Square
  $(".square").click(function () {
    clicked = colors[$(".square").index(this)];
    // if the clicked color is the correct color
    if (clicked === pickedColor) {
      $("#message").text("Correct!");
      changeColors(clicked);
      $("#resetBtn").text("Play Again?");
      // Change Banner Color
      $("h1").css("background-color", clicked);
    } else {
      $(this).css("background-color", "#232323");
      $("#message").text("Try Again");
    }
  });
};

function resetBtnInit() {
  // Reset Colors button
  $("#resetBtn").click(function () {
    reset();
  });
};

function modeBtnInit() {
  // Mode Button Click
  $(".mode").each(function (i) {
    $(this).click(function () {
      $(".mode").each(function (j) {
        $(this).removeClass("selected");
      });
      $(this).addClass("selected");
      $(this).text() === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  });
}

// Reset squares
function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick new random color
  pickedColor = colorPicker();
  // change color display to match picked color
  $("#colorDisplay").text(pickedColor);
  // change color of squares
  updateSquares();
  $("h1").css("background-color", "steelblue");
  $("#message").text("");
  $("#resetBtn").text("New Colors");
  $(".square").each(function (i) {
    if (colors[i]) {
      $(this).css("display", "block");
      $(this).css("background-color", colors[i]);
    } else {
      $(this).css("display", "none");
    };
  });
};

// update squares
function updateSquares() {
  $(".square").each(function (i) {
    $(this).css("background-color", colors[i]);
  });
}

// if we win change all squares to the correct color
function changeColors(color) {
  $(".square").each(function (index) {
    $(this).css("background-color", color);
  });
};

// pick a random color to be our winner
function colorPicker() {
  return colors[Math.floor(Math.random() * colors.length)];
};

// fill an array with random colors
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

// generate a reandom color
function randomColor() {
  // pick a "red" from 0 to 255
  var red = Math.floor(Math.random() * 256);
  // pick a "green" from 0 to 255
  var green = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 to 255
  var blue = Math.floor(Math.random() * 256);

  return "rgb( " + red + ", " + green + ", " + blue + ")";
};