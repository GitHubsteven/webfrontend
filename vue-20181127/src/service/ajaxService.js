/* eslint-disable */
let axios = require('axios');
let $ = require('jquery');

function get(url, data) {
  let realUrl = url + (data ? "?" + $.param(data) : "");
  console.log("real url:" + realUrl);
  return axios.get(realUrl);
}

exports.get = get;

