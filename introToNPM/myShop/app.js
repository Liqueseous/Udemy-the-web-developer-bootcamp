var faker = require('faker');

function randItem() { // Returns an item with name and price in array form
  var item = [];
  item.push(faker.commerce.productName());
  item.push(faker.commerce.price(0, 1000, 2, '$'));
  // item[itemName, itemPrice]
  return item;
};

function itemList(num) { // Returns an array of items
  var list = [];
  for (var i = 0; i < num; i++) {
    list.push(randItem());
  };
  // list[item][itemName, itemPrice]
  return list;
};

function printShop() {
  // list[item][itemName, itemPrice]
  var list = itemList(10);
  console.log("====================\n WELCOME TO MY SHOP\n====================\n");
  for (var i = 0; i < list.length; i++) {
    console.log(list[i][0] + " - " + list[i][1]);
  };
};

printShop();