const fs = require('fs');
const csv = require('csv-parser');
const CreateRouteController = require('./CreateRouteController');

module.exports = {
  readFile(req) {
    const results = [];
    fs.createReadStream(req)
      .pipe(csv(['ORIG', 'DEST', 'COST']))
      .on('data', (row) => {
        // console.log(row);
        results.push(row);
      });
    CreateRouteController.createRoute(results);
  },
};
