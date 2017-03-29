 const http = require('http');

 http.get(process.argv[2], (response) => {
   let buffer = new Buffer('');
   response.on('data', (data) => {
     buffer = Buffer.concat([buffer, data]);
   });
   response.on('end', () => {
     const content = buffer.toString();
     console.log(content.length);
     console.log(content);
   });
 });
