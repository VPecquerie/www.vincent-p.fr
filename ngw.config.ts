const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const PATHS = {
    src: path.join(__dirname, 'src')
};
export default function(config) {
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr|en/),
    );
    return config;
}
