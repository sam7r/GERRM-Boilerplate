const path = require('path');

const config = {
  publicFolder: path.join(__dirname, 'public'),
  sourceFolder: path.join(__dirname, 'src/app'),

  webPackServer: 'http://localhost',
  webPackPort: 8080,
  webPackDevFolder: 'assets',
  webPackBuildFolder: 'build',

  appServerPort: 3000,
  appServer: 'http://localhost',
  graphqlPort: 3001,
  graphqlEndpoint: 'graphql',

  mongoUrl: 'mongodb://192.168.99.100:32769',
  mongoCollection: 'users'
}

module.exports = config;
