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
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          message: data.message || '¡Gracias por tu mensaje! Te contactaré pronto.',
          type: 'success'
        });
        setFormData({ name: '', email: '' });
      } else {
        setStatus({
          loading: false,
          message: data.message || 'Error al enviar el mensaje.',
          type: 'error'
        });
      }
    } catch (err) {
      // Fallback si el backend no está corriendo
      setStatus({
        loading: false,
        message: '¡Gracias por tu mensaje! (Modo local sin backend activo)',
        type: 'success'
      });
      setFormData({ name: '', email: '' });
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
