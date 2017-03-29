const mymodule = require('./makeitmodular.js');

const filePath = process.argv[2];
const filterExtension = process.argv[3];

mymodule(filePath, filterExtension, (err, paths) => {
  paths.forEach((path) => {
    console.log(path);
  });
});
