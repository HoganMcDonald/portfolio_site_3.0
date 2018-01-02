/***********************************
          UI elements
***********************************/






/***********************************
          Event Handlers
***********************************/

function toggleSocial() {
  $('.social-link').each(function(index) {
    let timer = ($(this).hasClass('hidden')) ? index : 2 - index
    setTimeout(function() {
      $('.social-link').eq(index).toggleClass('hidden');
    }, timer * 100);
  })
}





/***********************************
          Event Listeners
***********************************/

$('.social-menu').eq(1).on('click', toggleSocial);

setTimeout(function() {
  $('.cls-1, .cls-2').animate({
    opacity: 0
  }, 600, function() {
  });

  $('.site-title-text').animate({
    opacity: 1
  }, 600, function() {
  });


}, 2000)
