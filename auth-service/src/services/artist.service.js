import { ArtistRepository } from "../repositories/artist.repository.js";

export const ArtistService = {
    createArtist: async (artistData) => {
        return ArtistRepository.createArtist(artistData);
    },

    updateArtist: async (id, updateData) => {
        return ArtistRepository.updateArtist(id, updateData);
    },

    getArtistById: async (id) => {
        return ArtistRepository.getArtistById(id);
    },

    getArtistByNomScene: async (nom_scene) => {
        return ArtistRepository.getArtistByNomScene(nom_scene);
    },

    getAllArtists: async () => {
        return ArtistRepository.getAllArtists();
    },

    deleteArtist: async (id) => {
        return ArtistRepository.deleteArtist(id);
    },
};