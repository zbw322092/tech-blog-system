// knex migration config file
const config = require('./config');

module.exports = {
  development: config.get('database')
};
