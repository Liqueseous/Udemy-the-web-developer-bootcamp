var playTo = Number($('#playToSelect').val());
var scoreOne = 0;
var scoreTwo = 0;

$('#playTo').text($('#playToSelect').val());

$('#playToSelect').change(function () {
  playTo = Number($('#playToSelect').val());
  $('#playTo').text($('#playToSelect').val());
  reset();
});

$('#play1').click(function () {
  if (scoreOne != playTo && scoreTwo != playTo) {
    scoreOne++;
    $('#score1').text(scoreOne);
    if (scoreOne === playTo) {
      $('#score1').addClass('win');
    }
  }
});

$('#play2').click(function () {
  if (scoreOne != playTo && scoreTwo != playTo) {
    scoreTwo++;
    $('#score2').text(scoreTwo);
    if (scoreTwo === playTo) {
      $('#score2').addClass('win');
    }
  }
});

$('#reset').click(function () {
  reset();
});

function reset() {
  scoreOne = 0;
  scoreTwo = 0;
  $('#score1').text(scoreOne);
  $('#score2').text(scoreTwo);
  $('#score1').removeClass('win');
  $('#score2').removeClass('win');
}