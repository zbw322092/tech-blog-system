const config = require('./config');

module.exports = {
  database: config.get('database'),
  migrationPath: config.get('paths:migrationPath'),
  currentVersion: config.get('safeVersion')
}