const server = require('./server');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

function makeApp (options) {
  options = options || {};

  return server(options);
}

module.exports = makeApp;