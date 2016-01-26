const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src/app'),
  build: path.join(__dirname, 'build')
};

const config = {
  devtool: 'eval-source-map',
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'build.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['jsx', 'babel'],
        exclude: /node_modules/
      }
    ]
  }
};

export default config;
