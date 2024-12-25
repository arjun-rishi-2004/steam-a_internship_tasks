const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique ID of the movie
 *         title:
 *           type: string
 *           description: The title of the movie
 *         director:
 *           type: string
 *           description: The director of the movie
 *         releaseYear:
 *           type: integer
 *           description: The release year of the movie
 *         genre:
 *           type: string
 *           description: The genre of the movie
 *       required:
 *         - title
 *         - director
 *         - releaseYear
 *         - genre
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     responses:
 *       200:
 *         description: A list of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.get('/', movieController.getAllMovies);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the movie
 *     responses:
 *       200:
 *         description: A single movie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 */
router.get('/:id', movieController.getMovieById);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: Movie created successfully
 */
router.post('/', movieController.createMovie);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       204:
 *         description: Movie updated successfully
 */
router.put('/:id', movieController.updateMovie);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the movie
 *     responses:
 *       204:
 *         description: Movie deleted successfully
 */
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
