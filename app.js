const http = require('http');

const message = 'Hello from Jenkins HW6!';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(message);
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

module.exports = { message, server };
