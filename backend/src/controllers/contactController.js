// Controlador para procesar mensajes de contacto
export const handleContact = (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Por favor, proporciona tu nombre y correo electrónico.'
      });
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'El formato del correo electrónico no es válido.'
      });
    }

    console.log(`[Contacto recibido] Nombre: ${name}, Email: ${email}`);

    return res.status(200).json({
      success: true,
      message: '¡Gracias por tu mensaje! Te contactaré pronto.',
      data: { name, email, receivedAt: new Date().toISOString() }
    });
  } catch (error) {
    console.error('Error al procesar el contacto:', error);
    return res.status(500).json({
      success: false,
      message: 'Ocurrió un error en el servidor. Intenta de nuevo más tarde.'
    });
  }
};
