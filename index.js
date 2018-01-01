const debug = require('debug')('boot');
const appCore = require('./core');
const startTime = Date.now();

debug('Starting app...');
appCore().start()
  .then(() => {
    console.log(`App boot ${Date.now() - startTime} ms`);
  })
  .catch((error) => {
    console.log(`boot error: ${error}`);
    process.exit(-1);
  });