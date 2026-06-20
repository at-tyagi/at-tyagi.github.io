// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  $('body').removeClass('fade-out');

  AOS.init({
    duration: 600,
    once: true,
    offset: 60
  });

  // Typed.js — cycling role titles
  if (typeof Typed !== 'undefined' && document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      strings: [
        'Machine Learning Engineer',
        'Cyber Security Enthusiast',
        'Competitive Programmer',
        'IIT Bombay — ChemE',
        'Open Source Builder'
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 2200,
      loop: true,
      showCursor: true,
      cursorChar: '_'
    });
  }
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
