const Artist = require('./Artist');
const Genre = require('./Genre');

Artist.belongsToMany(Genre, { through: 'artistGenre' });
Genre.belongsToMany(Artist, { through: 'artistGenre' });
