const Sequelize = require('sequelize');
const nconf = require('../../config/');
const dbConnectionConfig = nconf.get('database:connection:options');
const sequelize = new Sequelize(dbConnectionConfig);

module.exports = sequelize;