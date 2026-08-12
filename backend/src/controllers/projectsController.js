// Controlador para servir la lista de proyectos y experiencia profesional
export const getExperience = (req, res) => {
  const experienceData = [
    {
      id: 'sigep-turnos',
      title: '🏢 SIGEP-Turnos',
      tagline: 'Plataforma Web para Gestión y Control de Turnos',
      description: 'SIGEP-Turnos es una plataforma web integral diseñada para la gestión, organización y control eficiente de turnos y atención al usuario. Permite administrar filas de espera en tiempo real, usuarios, trámites y ventanillas de atención, visualizando el llamado de turnos en una pantalla pública interactiva. Cuenta con una arquitectura multi-entidad para separar y proteger los datos de cada organización.',
      howItWorks: [
        '1. Generación del turno por parte del usuario.',
        '2. Selección del trámite o servicio correspondiente.',
        '3. Ingreso automático a la fila de espera.',
        '4. El operador atiende desde su ventanilla asignada.',
        '5. El sistema realiza el llamado del siguiente turno.',
        '6. Visualización inmediata en la pantalla pública con alertas.',
        '7. Registro y auditoría del proceso para métricas y control de gestión.'
      ],
      technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Socket.io', 'CSS'],
      linkUrl: 'PEGAR_AQUI_URL_DE_SIGEP_TURNOS',
      linkText: '🚀 Ver SIGEP-Turnos en línea',
      isPrimary: true
    },
    {
      id: 'kassy',
      title: '🎓 KASSY',
      tagline: 'Plataforma Web de Gestión de Procesos Académicos',
      description: 'KASSY es una solución web orientada a optimizar y centralizar la administración de procesos académicos institucionales. Facilita la organización integral de estudiantes, docentes, asignaturas, calificaciones, registro de asistencia y control administrativo mediante un sistema modular y seguro.',
      howItWorks: [
        '1. Ingreso seguro a la plataforma según credenciales.',
        '2. Control de acceso y vistas personalizadas según el rol (Administrador, Docente, Estudiante).',
        '3. Los docentes gestionan asignaturas, evaluaciones y asistencias.',
        '4. Los estudiantes consultan su historial académico, notas y reportes.',
        '5. Los administradores gestionan usuarios, grupos e información institucional.',
        '6. Centralización total de los procesos académicos en un único sistema confiable.'
      ],
      technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MySQL / MongoDB', 'CSS', 'APIs REST'],
      linkUrl: 'PEGAR_AQUI_URL_DE_KASSY',
      linkText: '🚀 Explorar KASSY',
      isPrimary: true
    }
  ];

  return res.json({
    success: true,
    data: experienceData
  });
};

export const getFeaturedProjects = (req, res) => {
  const featuredData = [
    {
      id: 1,
      icon: '🧮',
      title: 'Calculadora',
      category: 'Herramientas matemáticas'
    },
    {
      id: 2,
      icon: '🔐',
      title: 'Generador de Contraseñas',
      category: 'Seguridad avanzada'
    },
    {
      id: 3,
      icon: '⏱️',
      title: 'Cronómetro',
      category: 'Control de tiempo'
    }
  ];

  return res.json({
    success: true,
    data: featuredData
  });
};
