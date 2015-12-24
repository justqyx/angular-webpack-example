'use strict';  

var pkg = require('./package.json');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP = path.join(__dirname, 'app');

// var sourceMapPlugin = new webpack.SourceMapDevToolPlugin('bundle.js.map', null,
//     "[absolute-resource-path]", "[absolute-resource-path]");
var hotModulePlugin = new webpack.HotModuleReplacementPlugin();
var providerPlugin = new webpack.ProvidePlugin({
    '_': 'underscore',
    '$': 'jquery'
});

var htmlPlugin = new HtmlWebpackPlugin({
    pkg: pkg,
    template: 'app/entry.html'
});

module.exports = {
    context: APP,
    cache: true,
    entry: {
        index: './core/bootstrap'
    },
    output: {
        path: path.join(__dirname, 'www'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.json$/,
            loader : 'json'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel?presets[]=es2015',
            exclude: /node_modules|bower_components/
        }, {
            test: /\.woff/,
            loader: 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf/,
            loader: 'file?prefix=font/'
        }, {
            test: /\.eot/,
            loader: 'file?prefix=font/'
        }, {
            test: /\.svg/,
            loader: 'file?prefix=font/'
        }]
    },
    resolve: {
        root: [
            path.join(__dirname, 'app'),
            path.join(__dirname, 'node_modules')
        ],
        moduleDirectories: [
            'node_modules'
        ],
        alias: {
        }
    },
    plugins: [
        hotModulePlugin,
        providerPlugin,
        htmlPlugin
    ]
};
