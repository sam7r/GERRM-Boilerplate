const Webpack = require('webpack');
const path = require('path');
const config = require('./config');

const PATHS = {
  app: config.SRC_DIR,
  build: path.join(__dirname, config.WP_BUILD_DIR),
  node_modules: path.join(__dirname, 'node_modules')
};

const wpConfig = {
  devtool: 'source-map',
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: PATHS.node_modules,
        loaders: ['babel']
      }
    ]
  }
};

module.exports = wpConfig;
