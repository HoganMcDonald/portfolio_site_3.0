/***********************************
          UI elements
***********************************/






/***********************************
          Event Handlers
***********************************/







/***********************************
          Event Listeners
***********************************/

setTimeout(function() {
  $('.cls-1, .cls-2').animate({
    opacity: 0
  }, 600, function() {
    console.log('complete');
  });

  $('.site-title-text').animate({
    opacity: 1
  }, 600, function() {
    console.log('complete');
  });


}, 2000)
