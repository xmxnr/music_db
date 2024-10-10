const {
	getAll,
	create,
	getOne,
	remove,
	update,
	setGenre,
} = require('../controllers/artist.controller');
const express = require('express');

const routerArtist = express.Router();

routerArtist.route('/').get(getAll).post(create);

routerArtist.route('/:id/genre').post(setGenre);

routerArtist.route('/:id').get(getOne).delete(remove).put(update);

module.exports = routerArtist;
