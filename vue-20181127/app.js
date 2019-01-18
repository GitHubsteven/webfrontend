let express = require('express');
let path = require('path');
let app = new express();

// '/'表示路由，express.static表示访问的静态路径资源
app.use(express.static(path.join(__dirname, 'src')));

app.use('/app', (req, resp) => {
  resp.sendfile('./src/index.html')
});

app.use('/hi', (req, res) => {
  res.send("hello,world");
})

const Port = 8000;
app.listen(Port, () => {
  console.log("server is listening: http://localhost:" + Port);
});
