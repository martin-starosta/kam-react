/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin([{ from: 'app/static', to: 'static' }]);

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: '/node-modules/' },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node-modules/' },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
}