var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var assetsPath = path.resolve(__dirname, 'dist');
var host = (process.env.HOST || 'localhost');
var port = (+process.env.PORT + 1) || 3001;

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/main.js',
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js'
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  },
  plugins: [new HtmlWebpackPlugin()]
};
