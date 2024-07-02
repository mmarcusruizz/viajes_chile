// NAVBAR - al activar scroll cambia el fondo con la clase "navbar-ng" //

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) { // límite de scroll 50 pixeles //
        $(".navbar").addClass("navbar-bg");
      } else {
        $(".navbar").removeClass("navbar-bg");
      }
    });


  // Smooth scrolling para los links del navbar //
  $('.navbar-nav .nav-link').on('click', function(event) { //detecta clicks en el nav
    var target = $(this).attr('href'); // obtiene el href del link
    if ($(target).length) { // si el target existe
      event.preventDefault(); // evita el comportamiento por defecto
      $('html, body').animate({ // anima el scroll hacia el target
        scrollTop: $(target).offset().top //define hacia donde va el scroll
      }, 100); // velocidad en ms de la animación
    }
  });



  });

  