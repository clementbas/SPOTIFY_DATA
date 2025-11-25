import { Router } from 'express';
import { artistController } from '../controllers/artist.controller.js';
import { verifyJwt } from '../middlewares/auth.middleware.js';

const router = Router();

// ----- Specific routes -----
router.get('/nom_scene/:nom_scene', verifyJwt, artistController.getArtistByNomScene);

// ----- CRUD -----
router.post('/', verifyJwt, artistController.createArtist);
router.get('/', verifyJwt, artistController.getAllArtists);
router.get('/:id', verifyJwt, artistController.getArtistById);
router.put('/:id', verifyJwt, artistController.updateArtist);
router.delete('/:id', verifyJwt, artistController.deleteArtist);
export default router;
