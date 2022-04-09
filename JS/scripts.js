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

    if ((whichStack === 'front' && experience === 'no') || age < 26) {
      $('#javaScript').fadeToggle();
    } else if (whichStack === 'back' && experience === 'some' && cliffJump === 'no') {
      $('#ruby').fadeToggle();
    } else if (whichStack === 'full' || experience === 'lots') {
      $('#cSharp').fadeToggle();
    } else if (cliffJump === 'yes' && dogCat === 'neither') {
      $('#swift').fadeToggle();
    } else {
      $('#python').fadeToggle();
    }

    $('#resultContainer').show();
    $('#programLanguageInputForm').hide();
    $(('.jumbotron')).hide();
  });
});