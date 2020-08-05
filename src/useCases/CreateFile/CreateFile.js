const fs = require('fs');

class CreatFile {
  createFile(request) {
    console.log(request.body);

    const airportsData = request.body;

    const csvFile = airportsData.airports.join(',');

    fs.writeFile('input-routes.csv', csvFile, (err) => {
      if (err) return console.log(err);
    });
  }
}

module.exports = new CreatFile();
