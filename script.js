$(function() {
  
  $('.slide-btn').click (function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if($(this).hasClass('after')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }  

    var slideIndex = $('.slide').index($('.active'));
    $('.slide-btn').show();
  
    if (slideIndex == 0) {
      $('.before').hide();
    } else if (slideIndex == $('.slide').length - 1) {
      $('.after').hide();
    }  
    
  });  
});
