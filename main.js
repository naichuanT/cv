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
  };

  
});



var form = document.getElementById("my-form");

      async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.innerHTML = "Oops! There was a problem submitting your form"
              }
            })
          }
        }).catch(error => {
          status.innerHTML = "Oops! There was a problem submitting your form"
        });
      }
      form.addEventListener("submit", handleSubmit)
