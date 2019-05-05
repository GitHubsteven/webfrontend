let express = require('express')
let path = require('path')

let app = new express()

app.use(express.static(path.join(__dirname, 'dist')))

let port = 8080
app.listen(port, () => {
  console.log('server start at  port:' + port)
})