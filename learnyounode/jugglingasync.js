const http = require('http');

function getRequest(url, callback) {
  http.get(url, (response) => {
    let buffer = new Buffer('');
    response.on('data', (data) => {
      buffer = Buffer.concat([buffer, data]);
    });
    response.on('end', () => {
      const content = buffer.toString();
      console.log(content);
      callback();
    });
  });
}

function getRequestArgv(index) {
  const url = process.argv[index];
  if (url) {
    getRequest(url, () => {
      getRequestArgv(index + 1);
    });
  }
}

getRequestArgv(2);
