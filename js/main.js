//Enable active class on click onto navbar
$('#topHeader .navbar a').on('click', function () {
  $('#topHeader .navbar').find('li.active').removeClass('active');
  $(this).parent('li').addClass('active');
});

//Enable popover tool on items
$(function () {
  $('[data-toggle="popover"]').popover();
});

//Enable Touchable on Carousel
$(document).ready(function () {
  $("#carousel").swipe({
    swipeRight: function () {
      $(this).carousel('prev')
    },
    swipeLeft: function () {
      $(this).carousel('next')
    }
  })
});
