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

    // =========================================================================
    // Lógica para el Modal de Previsualización y Descarga de PDF
    // =========================================================================
    const pdfOverlay = document.getElementById("pdf-modal-overlay");
    const modalTitle = document.getElementById("modal-doc-title");
    const modalSubtitle = document.getElementById("modal-doc-subtitle");
    const modalFilename = document.getElementById("modal-doc-filename");
    const modalIframe = document.getElementById("modal-pdf-iframe");
    const modalFallbackLink = document.getElementById("modal-pdf-fallback-link");
    const modalBtnDownloadTop = document.getElementById("modal-btn-download-top");
    const modalBtnDownloadBottom = document.getElementById("modal-btn-download-bottom");
    const modalBtnOpenTab = document.getElementById("modal-btn-open-tab");
    const modalDownloadText = document.getElementById("modal-bottom-download-text");
    const modalBtnCloseTop = document.getElementById("modal-btn-close-top");
    const modalBtnCloseBottom = document.getElementById("modal-btn-close-bottom");

    function abrirModalPdf(tipo) {
      if (!pdfOverlay) return;

      let config = {};
      if (tipo === "cv") {
        config = {
          title: "Currículum Vitae",
          subtitle: "CV Profesional • Yessica Jaramillo",
          url: "/imagen/CV.pdf",
          filename: "CV_Yessica_Jaramillo.pdf"
        };
      } else {
        config = {
          title: "Hoja de Vida",
          subtitle: "Hoja de Vida Completa • Yessica Jaramillo",
          url: "/imagen/Hoja de vida.pdf",
          filename: "Hoja_de_vida_Yessica_Jaramillo.pdf"
        };
      }

      modalTitle.textContent = config.title;
      modalSubtitle.textContent = config.subtitle;
      if (modalFilename) modalFilename.textContent = config.filename;
      modalIframe.src = `${config.url}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;
      if (modalFallbackLink) modalFallbackLink.href = config.url;

      // Configurar enlaces de descarga
      if (modalBtnDownloadTop) {
        modalBtnDownloadTop.href = config.url;
        modalBtnDownloadTop.setAttribute("download", config.filename);
      }

      if (modalBtnDownloadBottom) {
        modalBtnDownloadBottom.href = config.url;
        modalBtnDownloadBottom.setAttribute("download", config.filename);
      }
      if (modalDownloadText) {
        modalDownloadText.textContent = `Descargar ${config.title}`;
      }

      // Enlace para abrir en pestaña nueva
      if (modalBtnOpenTab) {
        modalBtnOpenTab.href = config.url;
      }

      // Mostrar modal y bloquear scroll del fondo
      pdfOverlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    }

    function cerrarModalPdf() {
      if (!pdfOverlay) return;
      pdfOverlay.style.display = "none";
      if (modalIframe) modalIframe.src = "";
      document.body.style.overflow = "";
    }

    const btnOpenCv = document.getElementById("btn-open-cv");
    if (btnOpenCv) {
      btnOpenCv.addEventListener("click", function() {
        abrirModalPdf("cv");
      });
    }

    const btnOpenHdv = document.getElementById("btn-open-hdv");
    if (btnOpenHdv) {
      btnOpenHdv.addEventListener("click", function() {
        abrirModalPdf("hdv");
      });
    }

    if (modalBtnCloseTop) {
      modalBtnCloseTop.addEventListener("click", cerrarModalPdf);
    }
    if (modalBtnCloseBottom) {
      modalBtnCloseBottom.addEventListener("click", cerrarModalPdf);
    }

    // Cerrar al hacer clic en el fondo oscuro exterior
    if (pdfOverlay) {
      pdfOverlay.addEventListener("click", function(e) {
        if (e.target === pdfOverlay) {
          cerrarModalPdf();
        }
      });
    }

    // Cerrar con la tecla Escape
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && pdfOverlay && pdfOverlay.style.display !== "none") {
        cerrarModalPdf();
      }
    });