const bookshelf = require('bookshelf');
const connection = require('./connection.js');

// create a bookshelf instance
const bTech = bookshelf(connection);

bTech.Model = bTech.Model.extend({
  tableName: 'blog'
});

module.exports = bTech;