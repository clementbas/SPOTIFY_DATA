import { ArtistService } from '../services/artist.service.js';

export const ArtistController = {
    createArtist: async (req, res) => {
        try {
            const artist = await ArtistService.createArtist(req.body);
            res.status(201).json(artist);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateArtist: async (req, res) => {
        try {
            const artist = await ArtistService.updateArtist(req.params.id, req.body);
            res.status(200).json(artist);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getArtistById: async (req, res) => {
        try {
            const artist = await ArtistService.getArtistById(req.params.id);
            if (!artist) {
                return res.status(404).json({ error: "Artiste non trouvé" });
            }
            res.status(200).json(artist);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getArtistByNomScene: async (req, res) => {
        try {
            const artist = await ArtistService.getArtistByNomScene(req.params.nom_scene);
            if (!artist) {
                return res.status(404).json({ error: "Artiste non trouvé" });
            }
            res.status(200).json(artist);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllArtists: async (req, res) => {
        try {
            const artists = await ArtistService.getAllArtists();
            res.status(200).json(artists);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteArtist: async (req, res) => {
        try {
            await ArtistService.deleteArtist(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};