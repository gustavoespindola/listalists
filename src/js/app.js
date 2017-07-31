// ES6 code goes here

$('.news-item .headline').each(function() {
  if ($(this).height() > 66) {
    $(this).addClass('too-long');
  }
});