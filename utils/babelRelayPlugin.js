var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../data/schema/schema.json');

module.exports = getBabelRelayPlugin(schema.data);
