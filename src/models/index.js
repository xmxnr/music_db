const Album = require('./Album');
const Artist = require('./Artist');
const Genre = require('./Genre');
const Song = require('./Song');

Artist.belongsToMany(Genre, { through: 'artistGenre' });
Genre.belongsToMany(Artist, { through: 'artistGenre' });

// album -> artist
Album.belongsToMany(Artist, { through: 'albumArtist' });
Artist.belongsToMany(Album, { through: 'albumArtist' });

// album -> songs
Song.belongsToMany(Album, { through: 'songAlbum' });
Album.belongsToMany(Song, { through: 'songAlbum' });

// songs -> artists
Song.belongsToMany(Artist, { through: 'songArtist' });
Artist.belongsToMany(Song, { through: 'songArtist' });

//songs -> genre
Song.belongsToMany(Genre, { through: 'songGenre' });
Genre.belongsToMany(Song, { through: 'songGenre' });
