const fs = require('fs');

const textString = fs.readFileSync(process.argv[2]).toString();
console.log(textString.split('\n').length - 1);
