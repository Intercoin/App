
const configGlobal = require('./config-global');
const API_BASE_URL = 'http://104.131.175.58:3002/';

module.exports = {
  NETWORK_URL: configGlobal.NETWORK_URL || '',
  API_BASE_URL
}
