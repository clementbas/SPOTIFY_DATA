import { artistService } from '../services/artist.service.js';

export const artistController = {

  async getAllArtists(req, res, next) {
    try {
      const artists = await artistService.getAllArtists();

      return res.status(200).json({
        success: true,
        data: artists
      });
    } catch (err) {
      next(err);
    }
  },

  async getArtistById(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ success: false, message: "Artist ID is required" });
      }

      const artist = await artistService.getArtistById(id);

      return res.status(200).json({
        success: true,
        data: artist
      });

    } catch (err) {
      next(err);
    }
  },

  async getArtistByNomScene(req, res, next) {
    try {
      const { nom_scene } = req.params;

      if (!nom_scene) {
        return res.status(400).json({ success: false, message: "nom_scene is required" });
      }

      const artist = await artistService.getArtistByNomScene(nom_scene);

      return res.status(200).json({
        success: true,
        data: artist
      });

    } catch (err) {
      next(err);
    }
  },

  async createArtist(req, res, next) {
    try {
      const { nom_scene } = req.body;

      if (!nom_scene) {
        return res.status(400).json({
          success: false,
          message: "nom_scene is required"
        });
      }

      const newArtist = await artistService.createArtist(req.body);

      return res.status(201).json({
        success: true,
        message: "Artist created successfully",
        data: newArtist
      });

    } catch (err) {
      next(err);
    }
  },

  async updateArtist(req, res, next) {
    try {
      const { id } = req.params;
      const updates = req.body;

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Artist ID is required"
        });
      }

      const updatedArtist = await artistService.updateArtist(id, updates);

      return res.status(200).json({
        success: true,
        message: "Artist updated successfully",
        data: updatedArtist
      });

    } catch (err) {
      next(err);
    }
  },

  async deleteArtist(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Artist ID is required"
        });
      }

      await artistService.deleteArtist(id);

      return res.status(200).json({
        success: true,
        message: "Artist deleted successfully"
      });

    } catch (err) {
      next(err);
    }
  }

};
