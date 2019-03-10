const http = require('http');

// create serve object:
http.createServer((req, res) => {
    res.write('hello World');
    res.end();
}).listen(5000, () => console.log('Server Running'))