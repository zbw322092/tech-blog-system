const path = require('path');
const nconf = require('nconf');
const utils = require('./utils.js');
const env = process.env.NODE_ENV || "development";

nconf.env({
  whitelist: ['development', 'production'],
  lowerCase: true
});

nconf.file('overrides', path.join(__dirname, './overrides.json'));
nconf.file('env-config', path.join(__dirname, './env' ,'./config.' + env + '.json'));

nconf.makePathsAbsolute = utils.makePathsAbsolute.bind(nconf);

nconf.makePathsAbsolute(nconf.get('paths'), 'paths', env);


module.exports = nconf;