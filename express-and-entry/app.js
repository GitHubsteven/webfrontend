let express = require('express')
let path = require('path')

let app = new express()

app.use(express.static(path.join(__dirname, 'src')))

let port = 9090
app.listen(port, () => {
  console.log('server start at  port:' + port)
})