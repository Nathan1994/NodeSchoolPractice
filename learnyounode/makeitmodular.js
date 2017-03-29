const fs = require('fs');
const path = require('path');

module.exports = function (filePath, extension, callback) {
  fs.readdir(filePath, (err, list) => {
    if (err) {
      return callback(err, null);
    }
    const filterdItems = [];
    list.forEach((item) => {
      if (path.extname(item) === `.${extension}`) {
        filterdItems.push(item);
      }
    });
    return callback(null, filterdItems);
  });
};
