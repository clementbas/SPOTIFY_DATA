import { Router } from 'express';
import { ArtistController } from '../controllers/artist.controller.js';

const router = Router();

router.post('/', ArtistController.createArtist);
router.put('/:id', ArtistController.updateArtist);
router.get('/:id', ArtistController.getArtistById);
router.get('/nom_scene/:nom_scene', ArtistController.getArtistByNomScene);
router.get('/', ArtistController.getAllArtists);
router.delete('/:id', ArtistController.deleteArtist);

export default router;