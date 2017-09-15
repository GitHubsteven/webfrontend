const http = require('http');

http.createServer((request, response) => {
    const {headers,method,url} =request;
    let body = [];
    request.on('error',(err)=>{
        console.log(err);
    }).on('data',(chunk)=>{
        body.push(chunk);
    }).on('end',()=>{
        body =Buffer.concat(body).toString();

        //beginning of nw stuff
        //response.setHeader('Content-Type','application/json');
        //response.setHeader('X-Power-By','bacon');

        response.writeHeader(200,{
            'Content-Type':'application/json',
            'X-Powered_By':'bacon'
        });
        const responseBody = {headers,method, url,body};
        response.write(JSON.stringify(responseBody));
        response.end();
        //response.write('<html>');
        //response.write('<body>');
        //response.write('<h1>hello,world!</h1>');
        //response.write('</body>');
        //reponse.write('</html>');
        //response.end();

        //response.end('<html><body><h1>Hello, World!</h1></body></html>');

    })
}).listen(8080);


//response.statusCode = 404;













