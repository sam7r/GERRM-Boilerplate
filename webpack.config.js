const Webpack = require('webpack');
const path = require('path');
const config = require('./config');

const PATHS = {
  app: config.sourceFolder,
  build: `${config.publicFolder}/${config.webPackDevFolder}`,
  node_modules: path.join(__dirname, 'node_modules')
};

const wpConfig = {
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?${config.webPackServer}${config.webPackPort}`,
    'webpack/hot/only-dev-server',
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    publicPath: `/${config.webPackDevFolder}/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: PATHS.node_modules,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = wpConfig;
