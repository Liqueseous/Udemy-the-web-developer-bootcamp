var i;
console.log("=========1=========");
for (i = -10; i <= 19; i++) {
  console.log(i);
}
console.log("=========2=========");
for (i = 10; i <= 40; i+=2) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("=========3=========");
for (i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("=========4=========");
for (i = 5; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}