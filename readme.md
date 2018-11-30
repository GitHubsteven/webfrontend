write for webfronted introduct.

how to create a js http server:
1 import 'http' module
```
const http = require('http');
```
2: create a server by http interface
```
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello asaland\n');
});
```
3: set the listening port:
```
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```


how to start a project
```
node app.js/server.js
```