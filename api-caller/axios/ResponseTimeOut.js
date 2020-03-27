axios({
    method: 'post',
    url: '/login',
    timeout: 4000,    // 4 seconds timeout
    data: {
        firstName: 'David',
        lastName: 'Pollock'
    }
})
  .then(response => {/* handle the response */})
  .catch(error => console.error('timeout exceeded'))