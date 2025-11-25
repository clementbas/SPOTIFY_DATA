import { Router } from 'express';
import { artistController } from '../controllers/artist.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

// ----- Specific routes -----
router.get('/nom_scene/:nom_scene', authenticate, artistController.getArtistByNomScene);

// ----- CRUD -----
router.post('/', authenticate, artistController.createArtist);
router.get('/', authenticate, artistController.getAllArtists);
router.get('/:id', authenticate, artistController.getArtistById);
router.put('/:id', authenticate, artistController.updateArtist);
router.delete('/:id', authenticate, artistController.deleteArtist);

export default router;
