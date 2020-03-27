let fetch = require('fetch').;

function fetchGet() {
    fetch("https://api.github.com/users/mapbox")
      .then((resp) => {
          console.log(resp);
      }, (error) => {
          console.log(error)
      });
}

fetchGet();