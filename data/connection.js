const knex = require('knex');
const config = require('../config');
let knexInstance;

if (!knexInstance && config.get('database') && config.get('database').client) {
  knexInstance = knex(config.get('database'));
}

module.exports = knexInstance;