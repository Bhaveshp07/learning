const http = require('http');
const fileIO = require('./routes');

const server = http.createServer(fileIO.fileIOc);

server.listen(3000);


