let express = require('express');
let path = require('path');
let app = new express();

//'/'表示路由，express.static表示访问的静态路径资源
app.use(express.static(path.join(__dirname, 'src')));

app.use('/app',(req,resp)=>{
    resp.sendfile('./src/index.html')
})

app.listen(9990, () => {
  console.log("server is listening: http://localhost:9990");
});
