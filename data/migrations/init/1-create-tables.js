const Promise = require('bluebird');

module.exports = function createTables(options) {
  var transacting = options.transacting;

  console.log('create table now');

  return Promise.resolve();
};
