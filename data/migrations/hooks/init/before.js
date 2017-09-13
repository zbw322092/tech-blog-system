const Promise = require('bluebird');
const config = require('../../../../config');

module.exports = function before () {
  console.log('init before now');

  return Promise.resolve();
};