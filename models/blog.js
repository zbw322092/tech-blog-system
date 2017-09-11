const bookshelf = require('./bookshelf.js');

const Blog = bookshelf.Model.extend({
  tableName: 'blog'
});

module.exports = Blog;