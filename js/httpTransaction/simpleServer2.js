/**
 * Created by dell on 2017/9/12.
 */
const http = require('http');

http.createServer((request, response)=> {
    let body = [];
    request.on('error', (err)=> {
        console.error(err);
        response.statusCode(404);
        response.end();
    });
    response.on('error', (err)=> {
        console.log("hello,world");
        //console.error(err);
    });
    request.on('data', (data)=> {
        body.push(attribute);
    });
    if (request.method === 'GET' && request.url === '/echo') {
        //have no idea what this means
        response.end("12")
        request.pipe(response);
    } else {
        response.statusCode = 404;
        response.end(body);
    }
}).listen(8090);