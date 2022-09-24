var doc = jQuery(document);

doc.ready(function() {
  "use strict";

  var typed = new Typed('.mytext', {
    strings: ['UI / UX Designer', "Web Developer"],
    smartBackspace: true, // Default value
    loop: true,
    loopCount: Infinity,
    backDelay: 1000,
    typeSpeed: 10,
  });

  if ($(window).scrollTop() < 200) {
    $(".navbar-nav").addClass("navbar-nav-bg");
  }

  $(".item-content-1").owlCarousel({
    items:1,
    rewind:true,
    autoplay:true,
    

  });



  });
