/***********************************
          UI elements
***********************************/

const iterations = ['Web Developer',
  'Wabe Devlooper.',
  'wAba mEvLoaper.',
  'wObaD meVloaLer.',
  'wOGaD medoaLed.',
  'hOGaD mcdoaLed.',
  'HoGan McdoaLd.',
  'Hogan Mcdonald.',
  'Hogan McDonald.'
];





/***********************************
          Event Handlers
***********************************/

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function toggleSocial() {
  $('.social-link').each(function(index) {
    let timer = ($(this).hasClass('hidden')) ? index : 2 - index
    setTimeout(function() {
      $('.social-link').eq(index).toggleClass('hidden');
    }, timer * 100);
  })
}

function changeText(i) {
  let interval = (i === iterations.length - 1) ? 300 : randomInt(100, 299); // this ensures that the final iteration will always be what the animation resolves on

  setTimeout(function() {
    console.log(iterations[i]);
    $('.site-title-text').text(iterations[i]);
  }, i * interval);
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
    for (var i = 0; i < iterations.length; i++) {
      changeText(i);
    }
  });


}, 2000)
