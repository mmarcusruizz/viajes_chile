// NAVBAR - al activar scroll cambia el fondo con la clase "navbar-ng" //

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) { // límite de scroll 50 pixeles //
        $(".navbar").addClass("navbar-bg");
      } else {
        $(".navbar").removeClass("navbar-bg");
      }
    });





  });

  