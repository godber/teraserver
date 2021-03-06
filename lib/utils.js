'use strict';

var fs = require('fs');

function existsSync(path) {
    try {
        fs.accessSync(path);
        return true;
    } catch (ex) {
        return false;
    }
}

function formatPath(path) {
    if (!path) {
        return '/path/not/given'
    }
    if (path[path.length - 1] === '/') {
        return path;
    }
    else {
        return path + '/';
    }
}

function getPlugin(name, config) {

    var configPath = formatPath(config.teraserver.plugins.path);
    var localPluginPath = __dirname + '/../plugins/';

    if (existsSync(localPluginPath + name)) {
        return require(localPluginPath + name);
    }

    if (existsSync(configPath + name)) {
        return require(configPath + name);
    }

    try {
        return require(name);
    }
    catch (e) {
        throw new Error(' Plugin ' + name + ' could not be found ', e)
    }
}

module.exports = {
    getPlugin: getPlugin
};