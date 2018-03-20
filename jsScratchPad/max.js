var array = [1,43,12,110,231,30,12,44,-12];


function max(arr) {
  var largest = arr[0];
  arr.forEach(function(el) {
    if (el > largest) {
      largest = el;
    }
  })
  return largest;
}

Array.prototype.myForEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}