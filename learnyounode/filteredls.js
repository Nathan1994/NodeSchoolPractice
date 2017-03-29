const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const filterExtension = `.${process.argv[3]}`;

fs.readdir(filePath, (err, list) => {
  if (err) {
    console.log(err);
  } else {
    list.forEach((item) => {
      if (path.extname(item) === filterExtension) {
        console.log(item);
      }
    });
  }
});
