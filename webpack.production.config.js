const Webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src/app/index'),
  build: path.join(__dirname, 'public', 'build'),
  node_modules: path.join(__dirname, 'node_modules')
};

const config = {
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

module.exports = config;
