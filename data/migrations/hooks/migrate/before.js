const Promise = require('bluebird');
const config = require('../../../../config');

module.exports = function before () {
  console.log('migrate before now');

  return Promise.resolve();
};