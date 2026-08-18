import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', lastname: '', email: '', phone: '', feedback: '' });
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: 'Enviando mensaje...', type: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/fbe3e3cacd2e490c77d4a0ff4c8505dc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Apellido: formData.lastname,
          Email: formData.email,
          Telefono: formData.phone,
          Opinion: formData.feedback,
          _subject: `Contacto Portafolio: ${formData.name} ${formData.lastname}`
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          message: '¡Gracias por tu mensaje! Se ha enviado correctamente a Yessica Jaramillo.',
          type: 'success'
        });
        setFormData({ name: '', lastname: '', email: '', phone: '', feedback: '' });
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
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Apellido"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-grid">
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-textarea-wrapper">
              <textarea
                name="feedback"
                className="form-input form-textarea"
                placeholder="¿Qué te pareció mi portafolio? Déjame tu opinión..."
                value={formData.feedback}
                onChange={handleChange}
                required
                rows="4"
              ></textarea>
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
