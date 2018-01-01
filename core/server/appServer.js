const debug = require('debug')('appServer');
const config = require('./config');
const Promise = require('bluebird');
const path = require('path');
const _ = require('lodash');
const fs = require('fs');

class AppServer {
  constructor (rootApp) {
    this.rootApp = rootApp;
    this.httpServer = null;
    this.connections = {};
    this.connectionId = 0;
  }

  start(externalApp) {
    debug('starting server...');

    const rootApp = externalApp || this.rootApp;
    let socketConfig;
    let socketValues = {
      path: path.join(__dirname, `../../content/${config.get('env')}.socket`),
      permissions: '660'
    };

    return new Promise((reslove, reject) => {

      // handle TCP socket to port binding
      let serverConfig = config.get('server') || {};
      if (serverConfig.hasOwnProperty('socket')) {
        socketConfig = config.get('server:socket');
        
        if (_.isString(socketConfig)) {
          socketValues.path = socketConfig;
        } else if (_.isObject(socketConfig)) {
          socketValues.path = socketConfig.path;
          socketValues.permissions = socketConfig.permissions || socketValues.permissions;
        }

        // Make sure the socket is gone before trying to create another
        try {
          fs.unlinkSync(socketValues.path);
        } catch(e) {}

        this.httpServer = rootApp.listen(socketValues.path);
        fs.chmod(socketValues.path, socketValues.permissions);
        config.set('server:socket', socketValues);
      } else {
        this.httpServer = rootApp.listen(
          config.get('server:port'),
          config.get('server:host')
        );
      }

      // handler events
      this.httpServer.on('error', (error) => {
        let appError;
        if (error.errorno === 'EADDRINUSE') {
          appError = new Error('port number is used, choose another one');
        } else {
          appError = new Error('error happened');
        }

        reject(appError);
      });

      this.httpServer.on('listening', () => {
        debug('...Server Started');
        reslove(this);
      });
    });

  }


}


module.exports = AppServer;