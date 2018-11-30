/* eslint-disable */
let axios = require('axios');

function get(url) {
  axios.get(url)
    .then(res => {
      console.log("res: {}", res)
    })
}

exports.get = get;

