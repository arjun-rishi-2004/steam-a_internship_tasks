const Movie = require('../models/movie');

const movieController = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await Movie.getAll();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getMovieById: async (req, res) => {
    try {
      const movie = await Movie.getById(req.params.id);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createMovie: async (req, res) => {
    try {
      const newMovie = await Movie.create(req.body);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateMovie: async (req, res) => {
    try {
      await Movie.update(req.params.id, req.body);
      res.json({ message: 'Movie updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteMovie: async (req, res) => {
    try {
      await Movie.delete(req.params.id);
      res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = movieController;
