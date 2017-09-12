const path = require('path');
const _ = require('lodash');

exports.makePathsAbsolute = function makePathsAbsolute(obj, parent, env) {
  const self = this;

  _.each(obj, (configValue, pathsKey) => {
    if (_.isObject(configValue)) {
      makePathsAbsolute.bind(self)(configValue, parent + ':' + pathsKey);
    } else if (
      _.isString(configValue) &&
      (configValue.match(/\/+|\\+/) || configValue === '.') &&
      !path.isAbsolute(configValue)
    ) {
      self.set(parent + ':' + pathsKey, path.normalize(path.join(__dirname, '../', configValue)));
    }
  });

  if (env === 'development') {
    let contentPath = self.get('paths:contentPath');
    let filename = self.get('database:connection:filename');
    self.set('database:connection:filename', path.normalize(path.join(contentPath, './data', filename)));
  }
};

exports.getVersion = function getVersion () {
  const { version = "" } = require('../package.json');
  return {
    fullVersion: version,
    safeVersion: version.match(/^(\d+\.)?(\d+)/)[0]
  }
};