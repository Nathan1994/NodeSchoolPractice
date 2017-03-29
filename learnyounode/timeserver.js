const net = require('net');

net.createServer((socket) => {
  const date = new Date();
  const month = `0${(date.getMonth() + 1).toString()}`.slice(-2);
  const str = `${date.getFullYear()}-${month}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`;
  socket.end(str);
}).listen(Number(process.argv[2]));
