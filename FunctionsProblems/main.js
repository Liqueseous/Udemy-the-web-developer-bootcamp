function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function factorial(num) {
  var total = 1;
  if (num === 0) {
    return 1;
  }
  while (num !== 0) {
    total = total * num;
    num = num - 1;
  }
  return total;
}

function kebabToSnake(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      str = str.slice(0, i) + "_" + str.slice(i+1, str.length)
    }
  }
  return str;
}