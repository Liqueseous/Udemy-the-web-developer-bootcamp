// ToDo List JavaScript File
// click to cross off todo
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

// click on X to delete ToDo
$('ul').on('click', 'span', function (e) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  e.stopPropagation();
});

$('input[type="text"]').keypress(function (e) {
  if (e.which === 13) {
    // create new todo text from input
    var entry = $(this).val();
    $(this).val('');
    // create a new li and add to ul
    $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + entry + '</li>');
  }
});

$('#toggle-form').click(function () {
  $('input[type="text"]').fadeToggle();
});