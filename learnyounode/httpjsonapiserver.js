const http = require('http');
const url = require('url');

http.createServer((request, response) => {
  if (request.method === 'GET') {
    const params = url.parse(request.url, true);
    const pathname = params.pathname;
    const date = new Date(params.query.iso);
    let json = '';
    if (pathname === '/api/parsetime') {
      json = `{"hour":${date.getHours()},"minute":${date.getMinutes()},"second":${date.getSeconds()}}`;
    } else if (pathname === '/api/unixtime') {
      json = `{"unixtime":${date.getTime().toString()}}`;
    }
    response.write(json);
    response.end();
  }
}).listen(Number(process.argv[2]));
