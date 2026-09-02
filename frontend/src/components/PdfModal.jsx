import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

/**
 * Componente modal para previsualizar y descargar documentos PDF
 * @param {boolean} isOpen - Controla la visibilidad del modal
 * @param {Object} doc - Objeto con datos del documento: { title, subtitle, fileUrl, fileName }
 * @param {Function} onClose - Función que cierra el modal
 */
export default function PdfModal({ isOpen, doc, onClose }) {
  // Manejo de eventos de teclado (Escape) y bloqueo de scroll
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !doc) return null;

  return (
    <div 
      className="pdf-modal-overlay" 
      onClick={(e) => {
        // Cierra el modal solo si se hace clic en el fondo oscuro
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div className="pdf-modal-container">
        {/* Encabezado del Modal */}
        <div className="pdf-modal-header">
          <div className="pdf-modal-title-group">
            <div className="pdf-modal-icon-badge">
              <FileText size={20} />
            </div>
            <div>
              <h3 id="pdf-modal-title" className="pdf-modal-title">{doc.title}</h3>
              <span className="pdf-modal-subtitle">{doc.subtitle || 'Documento Oficial'}</span>
            </div>
          </div>

          <div className="pdf-modal-actions">
            {/* Botón para descargar directamente */}
            <a 
              href={doc.fileUrl} 
              download={doc.fileName}
              className="pdf-btn-action pdf-btn-download"
              title="Descargar archivo en tu dispositivo"
            >
              <Download size={16} />
              <span>Descargar</span>
            </a>

            {/* Botón para abrir en nueva pestaña */}
            <a 
              href={doc.fileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pdf-btn-action pdf-btn-icon-only"
              title="Abrir en pestaña nueva"
              aria-label="Abrir en pestaña nueva"
            >
              <ExternalLink size={18} />
            </a>

            {/* Botón para cerrar */}
            <button 
              type="button"
              onClick={onClose} 
              className="pdf-btn-action pdf-btn-close"
              title="Cerrar visor"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Cuerpo del Modal: Visor de PDF embebido */}
        <div className="pdf-modal-body">
          <iframe
            src={`${doc.fileUrl}#toolbar=1&navpanes=0&view=FitH`}
            title={doc.title}
            className="pdf-modal-iframe"
          />
          <div className="pdf-modal-fallback-bar">
            <span>¿Tienes problemas para visualizar el documento?</span>
            <a 
              href={doc.fileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pdf-fallback-link"
            >
              Abrir visor externo
            </a>
          </div>
        </div>

        {/* Pie del Modal */}
        <div className="pdf-modal-footer">
          <p className="pdf-modal-footer-info">
            Visualizando archivo: <strong>{doc.fileName}</strong>
          </p>
          <div className="pdf-modal-footer-buttons">
            <button 
              type="button" 
              onClick={onClose} 
              className="pdf-footer-btn-secondary"
            >
              Cerrar
            </button>
            <a 
              href={doc.fileUrl} 
              download={doc.fileName}
              className="pdf-footer-btn-primary"
            >
              <Download size={16} />
              <span>Descargar {doc.title}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
