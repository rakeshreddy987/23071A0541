const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Log a message when an event is emitted
myEmitter.on('event', () => {
    console.log('An event occurred!');
});

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Node.js Custom Server!\n');
    } else if (req.url === '/os') {
        const osInfo = `OS Type: ${os.type()}\nOS Platform: ${os.platform()}\nCPU Architecture: ${os.arch()}\nFree Memory: ${os.freemem()} bytes\n`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(osInfo);
    } else if (req.url === '/path') {
        const examplePath = path.join(__dirname, 'example.txt');
        const parsedPath = path.parse(examplePath);
        const pathInfo = `Resolved Path: ${examplePath}\nParsed Path: ${JSON.stringify(parsedPath, null, 2)}\n`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(pathInfo);
    } else if (req.url === '/event') {
        myEmitter.emit('event');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Event emitted! Check the console.\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});


const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

