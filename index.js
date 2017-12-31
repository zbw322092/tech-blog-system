const express = require('express');
const app = express();
const Nconf = require('./core/server/config');
const host = Nconf.get('server:host') || '127.0.0.1';
const port = Nconf.get('server:port') || '6789';

app.use('/', (req, res) => {
  res.send('hi there');
});

app.listen(port, host, () => {
  console.log(`server is host on ${host}:${port}`);
});