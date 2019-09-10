const path = require('path');

const fileLoader = require('../file-loader');

class ConfigurationLoader
{
    constructor() {
        this.namespaces = new Map();
    }

    load() {
        let projectDirectory = process.cwd();
        let configurationFiles = fileLoader(`${projectDirectory}/src/config`)

        configurationFiles.forEach(configFile => {

            if(configFile !== '.keep') {
                const namespace = path.basename(configFile, '.js');
                if(!this.namespaces.has(namespace)) {
                    this.namespaces.set(namespace, new Map());
                }
                let config = require(configFile);
                Object.keys(config).map(key => {
                    this.namespaces.get(namespace).set(key, config[key]);
                });
            }

        })
    }

    get(namespace, key) {

        if(!this.namespaces.has(namespace)) {
            return null;
        } else if(!this.namespaces.get(namespace).has(key)) {
            return null
        } else {
            return this.namespaces.get(namespace).get(key);
        }

    }
}

const configurationLoader = new ConfigurationLoader();

module.exports = configurationLoader;