const nconf = require('nconf');
const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'dev';

const readJSONConfig = (filePath) => {
  let configPath = path.join(__dirname, filePath || '');
  let configString = fs.readFileSync(configPath, { encoding: 'utf8' });
  let configObj = JSON.parse(configString);
  return configObj;
}

nconf.env(['dev','prod']);

const overrideConfig = readJSONConfig('./overrides.json');
const defaultsConfig = readJSONConfig('./default.json');

nconf.overrides(overrideConfig);

nconf
  .env()
  .argv();

nconf.file('env', path.join(__dirname, `./env/${env}.json`) );

nconf.defaults(defaultsConfig);

module.exports = nconf;