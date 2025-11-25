import { Artist } from '../models/artist.model.js';

export const ArtistRepository = {
    createArtist: async (artistData) => {
        return Artist.create(artistData);
    },

    updateArtist: async (id, updateData) => {
        const artist = await Artist.findByPk(id);
        if (!artist) {
            throw new Error("Artiste non trouvé");
        }
        return await artist.update(updateData);
    },

    getArtistById: async (id) => {
        return Artist.findByPk(id);
    },

    getArtistByNomScene: async (nom_scene) => {
        return Artist.findOne({ where: { nom_scene } });
    },

    getAllArtists: async () => {
        return Artist.findAll();
    },

    deleteArtist: async (id) => {
        const artist = await Artist.findByPk(id);
        if (!artist) {
            throw new Error("Artiste non trouvé");
        }
        return await artist.destroy();
    },
};