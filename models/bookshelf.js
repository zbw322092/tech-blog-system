const env = process.env.ENV || 'development';
const knex = require('knex')(require('../knexfile.js')[env]);

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;