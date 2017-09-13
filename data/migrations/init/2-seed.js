const Promise = require('bluebird');

module.exports = function insertSeed(options) {
  var transacting = options.transacting;

  console.log('insert seed now');

  return Promise.resolve();
};
