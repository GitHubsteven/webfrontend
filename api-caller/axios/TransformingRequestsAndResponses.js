let axios = require("axios");

const options = {
    method: 'post',
    url: '/login',
    data: {
        firstName: 'Finn',
        lastName: 'Williams'
    },
    transformRequest: [(data, headers) => {
        // transform the data

        return data;
    }]
};

function send() {
    // send the request
    axios(options);
}