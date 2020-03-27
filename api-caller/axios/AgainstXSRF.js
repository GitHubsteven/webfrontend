let axios = require("axios");

const options = {
    method: 'post',
    url: '/login',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
};

// send the request
axios(options).then((res) => {
    console.log(res);
}, (error) => {
    console.log(error)
});