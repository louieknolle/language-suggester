$(document).ready(function() {
  $('form#formOne').submit(function(event) {
    event.preventDefault();
    const whichStack = $('#whichStack').val();
    const experience = $('#experience').val();
    const cliffJump = $('#cliffJump').val();
    const age = parseInt($('#age').val());
    const dogCat = $('#dogCat').val();

    if (whichStack === 'Frontend developer' || experience === 'No experience') {
      $('#javaScript').toggle();
    } else if (whichStack === 'Backend developer' || experience === 'Some experience') {
      $('#ruby').toggle();
    } else if (whichStack === 'Full stack' || experience === 'Lots of experience') {
      $('#cSharp').toggle();
    } else if (cliffJump === 'Yes') {
      $('')
    }
  });
});