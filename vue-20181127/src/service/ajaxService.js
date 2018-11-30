/* eslint-disable */
let axios = require('axios');

function get(url) {
  return axios.get(url);
}

exports.get = get;

