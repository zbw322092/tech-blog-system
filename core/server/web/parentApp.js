const debug = require('debug')('app');
const express = require('express');
const config = require('../config');

module.exports = function setupParentApp() {
  debug('Starting setting up parent app');
  const parentApp = express();

  // Global setting
  parentApp.enable('trust proxy');

  parentApp.use('/', (req, res) => {
    res.send('Hi There');
  });

  debug('Set parent app end');

  return parentApp;
}