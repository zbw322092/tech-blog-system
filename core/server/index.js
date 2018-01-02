const debug = require('debug')('boot:init');
const AppServer = require('./appServer');
const parentApp = require('./web/parentApp')();

const init = () => {
  return new AppServer(parentApp);
};

module.exports = init;