const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src/app/index'),
  build: path.join(__dirname, 'public/js')
};

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    publicPath: 'http://localhost:8080/js/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
      }
    ]
  },
  watch: true
};

module.exports = config;
