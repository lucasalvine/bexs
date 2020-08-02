const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const CreateRouteController = require('./CreateRouteController');

module.exports = {
  readFile(file) {
    const results = [];
    fs.createReadStream(path.resolve(file))
      .pipe(csv(['ORIG', 'DEST', 'COST']))
      .on('data', (row) => {
        // console.log(row);
        results.push(row);
      });
    CreateRouteController.createRoute(results);
  },
};
