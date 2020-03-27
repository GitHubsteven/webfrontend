let axios = require("axios");

// declare a request interceptor
axios.interceptors.request.use(config => {
    // perform a task before the request is sent
    console.log('Request was sent');

    return config;
}, error => {
    // handle the error
    return Promise.reject(error);
});

// declare a response interceptor
axios.interceptors.response.use((response) => {
    // do something with the response data
    console.log('Response was received');

    return response;
}, error => {
    // handle the response error
    return Promise.reject(error);
});

// sent a GET request
axios.get('https://api.github.com/users/mapbox')
  .then(response => {
      console.log(response.data.created_at);
  });