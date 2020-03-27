let axios = require("axios");

function simultaneousRequests() {
    // execute simultaneous requests
    axios.all([
        axios.get('https://api.github.com/users/mapbox'),
        axios.get('https://api.github.com/users/phantomjs')
    ])
      .then(responseArr => {
          //this will be executed only when all requests are complete
          console.log('Date created: ', responseArr[0].data.created_at);
          console.log('Date created: ', responseArr[1].data.created_at);
      });
}

function simultaneousRequestsSpread() {
    axios.all([
        axios.get('https://api.github.com/users/mapbox'),
        axios.get('https://api.github.com/users/phantomjs')
    ])
      .then(axios.spread((user1, user2) => {
          console.log('Date created: ', user1.data.created_at);
          console.log('Date created: ', user2.data.created_at);
      }));
}

simultaneousRequests();

simultaneousRequestsSpread();