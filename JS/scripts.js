$(document).ready(function() {
  $('form#formOne').submit(function(event) {
    event.preventDefault();
    $('.result').hide();
    const whichStack = $('#whichStack').val();
    const experience = $('#experience').val();
    const cliffJump = $('#cliffJump').val();
    const age = parseInt($('#age').val());
    const dogCat = $('#dogCat').val();


    if (whichStack === 'Frontend developer' && experience === 'No experience') {
      $('#formOne').hide();
      $('#javaScript').fadeToggle();
    } else if (whichStack === 'Backend developer' && experience === 'Some experience' && cliffJump === 'No') {
      $('#ruby').fadeToggle();
    } else if (whichStack === 'Full stack' || experience === 'Lots of experience') {
      $('#cSharp').fadeToggle();
    } else if (cliffJump === 'Yes') {
      $('#swift').fadeToggle();
    } else {
      $('#python').fadeToggle();
    }
  });
});