// fetch()

const url = 'http://localhost/test.htm';
const options = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
        a: 10,
        b: 20
    })
};

fetch(url, options)
  .then(response => {
      console.log(response.status);
  });