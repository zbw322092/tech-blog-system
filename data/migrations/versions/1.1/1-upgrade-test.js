const Promise = require('bluebird');
const config = require('../../../../config');

module.exports = function upgradeTest () {
  console.log('upgrade test now');

  return Promise.resolve();
};