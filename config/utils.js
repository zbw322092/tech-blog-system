const path = require('path');
const _ = require('lodash');

exports.makePathsAbsolute = function makePathsAbsolute(obj, parent) {
  var self = this;

  _.each(obj, (configValue, pathsKey) => {
    if (_.isObject(configValue)) {
      makePathsAbsolute.bind(self)(configValue, parent + ':' + pathsKey);
    } else if (
      _.isString(configValue) &&
      (configValue.match(/\/+|\\+/) || configValue === '.') &&
      !path.isAbsolute(configValue)
    ) {
      self.set(parent + ':' + pathsKey, path.normalize(path.join(__dirname, '../../..', configValue)));
    }
  });
}