const path = require('path');
const nconf = require('nconf');
const utils = require('./utils.js');
const env = process.env.NODE_ENV || "development";

nconf.env({
  whitelist: ['development', 'production'],
  lowerCase: true
});

// add version config
nconf.add('versions', { type: 'literal', store: utils.getVersion()});

nconf.file('overrides', path.join(__dirname, './overrides.json'));

nconf.env().argv();

nconf.file('env-config', path.join(__dirname, './env' ,'./config.' + env + '.json'));

// convert relative path to absolute path
nconf.makePathsAbsolute = utils.makePathsAbsolute.bind(nconf);

nconf.makePathsAbsolute(nconf.get('paths'), 'paths', env);


module.exports = nconf;