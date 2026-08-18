// Función tradicional para manejar el formulario
    function handleFormSubmit(event) {
      event.preventDefault();
      
      const form = event.target;
      const name = form.querySelector('#form-name').value;
      const lastname = form.querySelector('#form-lastname').value;
      const email = form.querySelector('#form-email').value;
      const phone = form.querySelector('#form-phone').value;
      const feedback = form.querySelector('#form-feedback').value;
      const submitBtn = form.querySelector('.submit-btn');
      
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      fetch('https://formsubmit.co/ajax/fbe3e3cacd2e490c77d4a0ff4c8505dc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: name,
          Apellido: lastname,
          Email: email,
          Telefono: phone,
          Opinion: feedback,
          _subject: `Contacto Portafolio (HTML): ${name} ${lastname}`
        })
      })
      .then(function(response) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        if (response.ok) {
          alert('¡Gracias por tu mensaje! Se ha enviado correctamente a Yessica Jaramillo.');
          form.reset();
        } else {
          alert('Error al enviar el mensaje. Intenta de nuevo.');
        }
      })
      .catch(function(error) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        alert('Ocurrió un error al enviar el mensaje. Intenta de nuevo.');
      });
    }

    // Función tradicional para animaciones de scroll
    function handleScrollAnimations() {
      const elements = document.querySelectorAll('.fade-up');
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      elements.forEach(function(element) {
        observer.observe(element);
      });
    }

    // Función tradicional para navegación suave
    function handleSmoothScroll() {
      const links = document.querySelectorAll('nav a[href^="#"]');
      
      links.forEach(function(link) {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }

    // Inicialización cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', function() {
      // Configurar formulario
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
      }

      // Inicializar animaciones y navegación
      handleScrollAnimations();
      handleSmoothScroll();
    });

    // slider de imagenes 
    const slider = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider-slide");
    let posicion = 0;
    let intervalo;

    function moverSlider() {
      if (slider) {
        slider.style.transform = "translateX(-" + (posicion * 100) + "%)";
      }
    }

    function siguiente(){
      posicion++;
      if(posicion >= slides.length){
        posicion = 0;
      }
      moverSlider();
    }

    function anterior(){
      posicion--;
      if(posicion < 0){
        posicion = slides.length - 1;
      }
      moverSlider();
    }

    function iniciarAuto(){
      intervalo = setInterval(siguiente, 2000);
    }

    function detenerAuto(){
      clearInterval(intervalo);
      setTimeout(iniciarAuto, 4000);
    }

    const btnDerecha = document.getElementById("btnderecha");
    if (btnDerecha) {
      btnDerecha.addEventListener("click", function(){
        siguiente();
        detenerAuto();
      });
    }

    const btnIzquierda = document.getElementById("btnizquierda");
    if (btnIzquierda) {
      btnIzquierda.addEventListener("click", function(){
        anterior();
        detenerAuto();
      });
    }

    if (slider && slides.length > 0) {
      iniciarAuto();
    }