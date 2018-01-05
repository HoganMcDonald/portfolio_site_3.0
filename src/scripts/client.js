/***********************************
          UI elements
***********************************/

const projects = [
  {
    name: 'Odin & Osgar.',
    description: 'Odin and Osgar is a retail venture that I am a co-owner of. Our goal was to design and print a line of tshirts that celebrate reading and bookishness (the good kind). We have an established retail presence, but are now expanding to online.',
    imgsrc: '/assets/images/minnesotabound.png'
  },
  {
    name: 'TCSW.',
    description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text .',
    imgsrc: '/assets/images/tcsw.jpg'
  },
  {
    name: 'Praeco.',
    description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text .',
    imgsrc: '/assets/images/praeco.png'
  },
  {
    name: 'Capture.',
    description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text .',
    imgsrc: '/assets/images/capture.png'
  }
];

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

const windowHeight = $(window).height();

const landing = $('#landing').scrollTop();
const tech = $('#tech').offset().top;
const solutions = $('#solutions').offset().top;
const me = $('#me').offset().top;







/***********************************
          Event Handlers
***********************************/

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function toggleSocial() {
  $('.social-link').each(function(index) {
    let timer = (!$(this).hasClass('show')) ? index : 2 - index
    setTimeout(function() {
      $('.social-link').eq(index).toggleClass('show');
    }, timer * 100);
  })
}

function changeText(i) {
  let interval = (i === iterations.length - 1) ? 300 : randomInt(100, 299); // this ensures that the final iteration will always be what the animation resolves on

  setTimeout(function() {
    $('.site-title-text').text(iterations[i]);
  }, i * interval + 600);
}

function sectionScroll() {
  const section = $(`#${$(this).text().toLowerCase()}`);
  if (section.length) {
    $('html,body').animate({scrollTop: section.offset().top},'slow');
  }
}

function changeMenuColor(currentScroll) {
  if (currentScroll < tech) {
    $('.nav-link').css('text-shadow', '2px 2px 0px #d4afcd');
  }
  if (currentScroll >= tech && currentScroll < solutions) {
    $('.nav-link').css('text-shadow', '2px 2px 0px #b79fad');
  }
  if (currentScroll >= solutions && currentScroll < me) {
    $('.nav-link').css('text-shadow', '2px 2px 0px #798086');
  }
  if (currentScroll >= me) {
    $('.nav-link').css('text-shadow', '2px 2px 0px #556f7a');
  }
}

function changeCurrentProject() {
  const positions = ['first', 'second', 'third', 'forth'];

  $('.project').each(function() {
    for (var i = positions.length - 1; i >= 0; i--) {
      if ($(this).hasClass(`${positions[i]}-position`)) {
        let newClass = (i - 1 < 0) ? positions[positions.length - 1] : positions[i - 1];
        $(this).removeClass(`${positions[i]}-position`);
        $(this).addClass(`${newClass}-position`);
        break;
      } // if block
    } // for loop
  }); // each block
} // change changeCurrentProject

function revealTitles(currentScroll) {
  $('.section-title').each(function() {
    if (currentScroll > $(this).offset().top - windowHeight * 0.75) {
      console.log($(this));
      $(this).removeClass('section-title');
    }
  });
}


/***********************************
          Event Listeners
***********************************/

$('.social-menu').eq(1).on('click', toggleSocial);

$('.nav-link').on('click', sectionScroll);

$(window).on('scroll', function() {
  const bScroll = document.scrollingElement.scrollTop;
  changeMenuColor(bScroll);
  revealTitles(bScroll);
});

$('.next-project').on('click', changeCurrentProject);

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
