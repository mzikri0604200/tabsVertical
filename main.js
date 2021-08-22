$(document).ready(function () {
  $('.hide').hide();

  $('.cls-3').click(function () {
    let pop = $('.russia-txt').fadeIn();
    var dataId = $(this).attr('data-title');
    $('.prov').text(dataId);
    $(this).fadeIn(pop);
    // $('.hide').hide();
    // alert('The data-id of clicked item is: ' + dataId);
  });
  // $('#ID-BA').click(function () {
  //   $('.hide').hide();
  //   $('.indo-txt').fadeIn();
  //   var dataId = $(this).attr('data-title');
  //   $('.prov').text(dataId);
  //   // alert('The data-id of clicked item is: ' + dataId);
  // });

  $('.close').click(function () {
    $('.hide').hide();
  });
});
