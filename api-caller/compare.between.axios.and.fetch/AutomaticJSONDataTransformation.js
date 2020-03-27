let axios = require("axios");

// axios
axios.get('https://api.github.com/orgs/axios')
  .then(response => {
      console.log(response.data);
  }, error => {
      console.log(error);
  });

// fetch()
fetch('https://api.github.com/orgs/axios')
  .then(response => response.json())    // one extra step
  .then(data => {
      console.log(data)
  })
  .catch(error => console.error(error));