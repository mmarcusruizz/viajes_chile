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





  

  // Accesibilidad del formulario de contacto

  const form = document.querySelector('.myform'); // Selecciona el formulario
  const submitButton = document.querySelector('#enviar'); // Selecciona el botón "enviar" tipo submit
  
  form.addEventListener('submit', (event) => {
      event.preventDefault(); // previene los envíos de formulario por defecto
  
      const nameInput = form.querySelector('input[placeholder="Nombre"]'); //detecta texto en "nombre"
      const emailInput = form.querySelector('input[placeholder="Correo electrónico"]'); //detecta texto en "email"
  
      if (nameInput.value === '' || emailInput.value === '') { // si alguno de los campos está vacío
          alert('Por favor, complete los campos de nombre y correo electrónico.'); // muestra un mensaje de error
      } else {
        alert('¡Formulario enviado correctamente!'); // muestra un mensaje de éxito
        form.reset(); // resetea el formulario
      }
  });

  });

  