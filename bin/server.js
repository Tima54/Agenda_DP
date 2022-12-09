let http = require('http');
let fs = require('fs');
let path = require('path');
let server = http.createServer();
server.on('request',(request,response) => {
    let filePath = '../src'+request.url;
    if(filePath==="../src/"){
        filePath = "../src/main.html";
    }
    let extName = path.extname(filePath);
    let contentType = 'text/html';
    switch(extName){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }
    fs.readFile(filePath, (err, data) => {
        if (err) throw err
        response.writeHead(200, {
            'Content-type': contentType
        })
        response.end(data)
    })

})

server.listen(8500);