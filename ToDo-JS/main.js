$("li").hover(function() {
  $(this).addClass("selected");
}, function() {
    $(this).removeClass("selected");
});

$("li").click(function() {
  $(this).toggleClass("done");
});