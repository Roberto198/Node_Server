const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    // if (req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) =>{
    //         if (err) throw err;
    //     res.writeHead(200, {'Content-Type': 'text/html'})
    //     res.end(content)
    //     })
    // }
    // if (req.url === '/api/users'){
    //     const users = [
    //         {name: 'Bob Smith', age: '30'},
    //         {name: 'Jane Doe', age: '31'}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))

    // }

// Build file path
let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

//Extention of the file:
let extname = path.extname(filePath)

//initial content type
let contentType = 'text/html'

//check extention THEN set content type:
switch (extname) {
    case '.js':
        contentType = 'text/javaccript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;
    case '.jpg':
        contentType = 'image/jpg';
        break;
}

// Read file:
fs.readFile(filePath, (err, content) => {
    if(err){
        if(err.code === 'ENOENT') {
            //page not found
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
             res.writeHead(200, {'Content-Type': 'text/html'})
             res.end(content, 'UTF8')
            });
        
        } else{
            //likely server error
            res.wrteHead(500);
            res.end(`Server Error:${err.code}`)
        }
    }else{
        //success response:
        res.writeHead(200, {'Content-Type': contentType})
        res.end(content, 'UTF8')
    }
})


});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));