// Node Exercise 2
// AVERAGE GRADE



// In the file define a new function named "average"
// It should take a single parameter: an array of test scores(all numbers)
// It should return an average score in the array, rounded to the nearest whole number


// AVERAGE FUNCTION DEFINED
function average(scoreArr) {
  var ttl = 0;
  var num;

  for(num = 0; num < scoreArr.length; num++){
    ttl += scoreArr[num];
  }
  return (Math.round(ttl / num));
}


// TEST SET
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); // should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // should return 68