$(document).ready(function() {
  $('form#programLanguageInputForm').submit(function(event) {
    event.preventDefault();
    
    $('#resultContainer').hide();
    $('.result').hide();

    const whichStack = $('#whichStack').val();
    const experience = $('#experience').val();
    const cliffJump = $('#cliffJump').val();
    const age = parseInt($('#age').val());
    const dogCat = $('#dogCat').val();

    if (whichStack === 'Frontend developer' && experience === 'No experience') {
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

    $('#resultContainer').show();
    $('#programLanguageInputForm').hide();
    $(('.jumbotron')).hide();
  });
});