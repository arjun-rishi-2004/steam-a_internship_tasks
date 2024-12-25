const pool = require('../config/database');

const Movie = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM movies');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
    return result.rows[0];
  },

  create: async (movie) => {
    const { title, director, releaseYear, genre } = movie;
    const result = await pool.query(
      'INSERT INTO movies (title, director, releaseYear, genre) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, director, releaseYear, genre]
    );
    return result.rows[0];
  },

  update: async (id, movie) => {
    const { title, director, releaseYear, genre } = movie;
    await pool.query(
      'UPDATE movies SET title = $1, director = $2, releaseYear = $3, genre = $4 WHERE id = $5',
      [title, director, releaseYear, genre, id]
    );
  },

  delete: async (id) => {
    await pool.query('DELETE FROM movies WHERE id = $1', [id]);
  },
};

module.exports = Movie;
