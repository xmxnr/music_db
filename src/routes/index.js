const express = require('express');
routerGenre = require('./genre.router');
routerArtist = require('./artist.router');
routerAlbum = require('./album.router');
routerSong = require('./song.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', routerGenre);
router.use('/artists', routerArtist);
router.use('/albums', routerAlbum);
router.use('/songs', routerSong);

module.exports = router;
