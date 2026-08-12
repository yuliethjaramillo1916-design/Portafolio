import { Router } from 'express';
import { handleContact } from '../controllers/contactController.js';
import { getExperience, getFeaturedProjects } from '../controllers/projectsController.js';

const router = Router();

// Rutas de la API
router.post('/contact', handleContact);
router.get('/experience', getExperience);
router.get('/projects', getFeaturedProjects);

export default router;
