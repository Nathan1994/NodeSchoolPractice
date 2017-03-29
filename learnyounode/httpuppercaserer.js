const http = require('http');
const map = require('through2-map');

http.createServer((request, response) => {
  if (request.method === 'POST') {
    request.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
}).listen(Number(process.argv[2]));
