const path = require('path');

const config = {
  publicFolder: path.join(__dirname, 'public'),
  sourceFolder: path.join(__dirname, 'src/app/index'),

  webPackServer: 'http://localhost',
  webPackPort: 8080,
  webPackDevFolder: 'assets',
  webPackBuildFolder: 'build',

  appServerPort: 3000,
  appServer: 'http://localhost',
  graphqlPort: 3001,
  graphqlEndpoint: 'graphql',

  /*
    If accessing locally use Docker container ACCESS URL
    If accessing from another container user port 27017
  */
  mongoUrl: 'mongodb://192.168.99.100:32769',
  mongoCollection: 'users'
}

module.exports = config;
