

$('#portfolio-tab').on('click', function () {
  $('#portfolio-content').show(500);
    $('#home').hide(500);
    $('#Skills').hide(500);
    
  });

  $('#home-tab').on('click', function () {
    $('#home').show(500);
    $('#portfolio-content').hide(500);
    $('#Skills').hide(500);
  });


  $('#skills-tab').on('click', function () {
    $('#Skills').show(500);
    $('#home').hide(500);
    $('#portfolio-content').hide(500);
  });

  $('#fccButton').on('click', function () {
    $('#FCC').toggle(500);
    
  });



 