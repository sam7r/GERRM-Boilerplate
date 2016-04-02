const path = require('path');

const config = {
  // Local dir config
  PUBLIC_DIR: path.join(__dirname, 'public'),
  SRC_DIR: path.join(__dirname, 'src/app'),
  // WebPack config
  WP_URL: 'http://localhost',
  WP_PORT: 8080,
  WP_DEV_DIR: 'assets',
  WP_BUILD_DIR: 'build',
  // App server config
  APP_PORT: 3000,
  APP_URL: 'http://localhost',
  // GraphQL server config
  GQL_PORT: 3001,
  GQL_URL_DIR: 'graphql',
  // Database config
  DB_URL: 'mongodb://localhost:27017',
  DB_NAME: 'users'
}

module.exports = config;
