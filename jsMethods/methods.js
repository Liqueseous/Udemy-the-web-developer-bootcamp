var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["Bob", "Tina"],
  add: function(x,y){
    return x + y;
  }
};

var dog = {
  speak: function(){
    return "WOOF";
  }
};

var cat = {
  speak: function(){
    return "MEOW";
  }
};

var comments = {
  data: ["Good Job!", "Bye", "Lame..."],
  print: function() {
    this.data.forEach(function(el){
      console.log(el);
    });
  },
};