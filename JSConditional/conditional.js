var age = prompt("What is your age?");

if(age <= 0) {
  console.log("ALERT_Error: Age cannot be 0 or less");
  alert("Error: Age cannot be 0 or less");
} else if(age < 18) {
  console.log("ALERT_Sorry you are not old enough to enter");
  alert("Sorry you are not old enough to enter");
} else if(age < 21) {
  console.log("ALERT_You can enter but cannot drink");
  alert("You can enter but cannot drink");
} else {
  console.log("ALERT_Hooray you are 21!");
  alert("Hooray you are 21!");
}

if(age % 2 !== 0) {
  console.log("ALERT_Your age is odd!");
  alert("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
  console.log("ALERT_Your age is a perfect square!");
  alert("Your age is a perfect square!");
}