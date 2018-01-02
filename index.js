const debug = require('debug')('boot:index');
const appCore = require('./core');
const startTime = Date.now();

debug('Starting app...');
let appServer = null;
appCore().start()
  .then((server) => {
    appServer = server;
    console.log(`App boot ${Date.now() - startTime} ms`);
  })
  .catch((error) => {
    console.log(`boot error: ${error}`);
    process.exit(-1);
  });
