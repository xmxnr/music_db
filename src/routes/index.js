const express = require('express');
routerGenre = require('./genre.router');
routerArtist = require('./artist.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', routerGenre);
router.use('/artists', routerArtist);

module.exports = router;
