const PurifyCSSPlugin = require('purifycss-webpack');
const path = require('path');
const glob = require('glob');

export default function(config) {
    config.plugins.push(
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, '**/*.html'))
        })
    );
    return config;
}