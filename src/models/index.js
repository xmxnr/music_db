const Album = require('./Album');
const Artist = require('./Artist');
const Genre = require('./Genre');

Artist.belongsToMany(Genre, { through: 'artistGenre' });
Genre.belongsToMany(Artist, { through: 'artistGenre' });

// album -> artist
Album.belongsToMany(Artist, { through: 'albumArtist' });
Artist.belongsToMany(Album, { through: 'albumArtist' });
