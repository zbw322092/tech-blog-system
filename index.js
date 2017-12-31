const express = require('express');
const app = express();
const debug = require('debug')('boot:index');
const Nconf = require('./core/server/config');
const host = Nconf.get('server:host') || '127.0.0.1';
const port = Nconf.get('server:port') || '6789';

app.use('/', (req, res) => {
  debug('Got a request');
  res.send('hi there');
});

app.listen(port, host, () => {
  debug('Starting Server...');
  console.log(`server is host on ${host}:${port}`);
});