import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: 'Enviando mensaje...', type: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/herranyuyeimi@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Mensaje de contacto enviado desde el Portafolio Web por: ${formData.name} (${formData.email})`
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          message: '¡Gracias por tu mensaje! Se ha enviado correctamente. (Si es la primera vez que lo utilizas, revisa tu correo para activar el formulario).',
          type: 'success'
        });
        setFormData({ name: '', email: '' });
      } else {
        setStatus({
          loading: false,
          message: data.message || 'Error al enviar el mensaje. Intenta de nuevo.',
          type: 'error'
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        message: 'Ocurrió un error al enviar el mensaje. Intenta de nuevo.',
        type: 'error'
      });
    }
  };

  return (
    <section id="tu-proyecto" className="tu-proyecto">
      <div className="widgets-container">
        <div className="contact-form">
          <h3>Hablemos de tu proyecto</h3>
          
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={status.loading}>
              {status.loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {status.message && (
              <div className={`feedback-msg ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
