import { Artist } from '../models/artist.model.js';

export const artistRepository = {

  async findById(id) {
    try {
      return await Artist.findByPk(id);
    } catch (error) {
      throw new Error(`ArtistRepository.findById: ${error.message}`);
    }
  },

  async findByNomScene(nom_scene) {
    try {
      return await Artist.findOne({ where: { nom_scene } });
    } catch (error) {
      throw new Error(`ArtistRepository.findByNomScene: ${error.message}`);
    }
  },

  async findAll() {
    try {
      return await Artist.findAll();
    } catch (error) {
      throw new Error(`ArtistRepository.findAll: ${error.message}`);
    }
  },

  async create(artistData) {
    try {
      return await Artist.create(artistData);
    } catch (error) {
      throw new Error(`ArtistRepository.create: ${error.message}`);
    }
  },

  async update(id, updateData) {
    try {
      const [affectedRows] = await Artist.update(updateData, { where: { id } });

      if (affectedRows === 0) return null;

      return await Artist.findByPk(id);

    } catch (error) {
      throw new Error(`ArtistRepository.update: ${error.message}`);
    }
  },

  async delete(id) {
    try {
      const deleted = await Artist.destroy({ where: { id } });
      return deleted > 0; // renvoie true / false
    } catch (error) {
      throw new Error(`ArtistRepository.delete: ${error.message}`);
    }
  }

};
