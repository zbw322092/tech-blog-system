const bookshelf = require('bookshelf');
const connection = require('../data/connection.js');

// create a bookshelf instance
const bTech = bookshelf(connection);

var Blog = bTech.Model.extend({
  tableName: 'blog'
});

module.exports = Blog;