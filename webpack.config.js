const Webpack = require('webpack');
const path = require('path');
const config = require('./config');

const PATHS = {
  app: config.SRC_DIR,
  build: `${config.PUBLIC_DIR}/${config.WP_DEV_DIR}`,
  node_modules: path.join(__dirname, 'node_modules')
};

const wpConfig = {
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?${config.WP_URL}:${config.WP_PORT}`,
    'webpack/hot/only-dev-server',
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    publicPath: `/${config.WP_DEV_DIR}/`,
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
