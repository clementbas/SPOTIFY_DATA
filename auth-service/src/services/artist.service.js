import { artistRepository } from '../repositories/artist.repository.js';

export const artistService = {

  async getAllArtists() {
    try {
      return await artistRepository.findAll();
    } catch (error) {
      throw new Error(`ArtistService.getAllArtists: ${error.message}`);
    }
  },

  async getArtistById(id) {
    try {
      const artist = await artistRepository.findById(id);

      if (!artist) {
        const err = new Error('Artist not found');
        err.status = 404;
        throw err;
      }

      return artist;
    } catch (error) {
      throw new Error(`ArtistService.getArtistById: ${error.message}`);
    }
  },

  async getArtistByNomScene(nom_scene) {
    try {
      return await artistRepository.findByNomScene(nom_scene);
    } catch (error) {
      throw new Error(`ArtistService.getArtistByNomScene: ${error.message}`);
    }
  },

  async createArtist(artistData) {
    try {
      // Exemple : si plus tard tu veux vérifier l’unicité du nom de scène
      const existing = await artistRepository.findByNomScene(artistData.nom_scene);

      if (existing) {
        const err = new Error('Stage name already in use');
        err.status = 400;
        throw err;
      }

      return await artistRepository.create(artistData);

    } catch (error) {
      throw new Error(`ArtistService.createArtist: ${error.message}`);
    }
  },

  async updateArtist(id, updateData) {
    try {
      const existingArtist = await artistRepository.findById(id);

      if (!existingArtist) {
        const err = new Error('Artist not found');
        err.status = 404;
        throw err;
      }

      const updated = await artistRepository.update(id, updateData);
      return updated;

    } catch (error) {
      throw new Error(`ArtistService.updateArtist: ${error.message}`);
    }
  },

  async deleteArtist(id) {
    try {
      const exists = await artistRepository.findById(id);

      if (!exists) {
        const err = new Error('Artist not found');
        err.status = 404;
        throw err;
      }

      const deleted = await artistRepository.delete(id);
      return { success: deleted };

    } catch (error) {
      throw new Error(`ArtistService.deleteArtist: ${error.message}`);
    }
  }

};
