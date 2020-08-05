const createCsvFile = require('csv-writer').createObjectCsvWriter;

class CreatFile {
  createFile(request, response) {
    const airportsData = request.body;
    console.log(airportsData.airports);

    const csvWriter = createCsvFile({
      path: 'input-routes.csv',
      header: [
        { id: 'origin', title: 'origin' },
        { id: 'destination', title: 'destination' },
        { id: 'cost', title: 'cost' },
      ],
    });

    csvWriter
      .writeRecords(airportsData.airports)
      .then(() => response.status(201).json({ message: 'CSV created' }))
      .catch((err) => {
        console.log(err);
        response.status(401).json({
          message:
            'Cannot be possible create this file, check the JSON format.',
        });
      });
  }
}

module.exports = new CreatFile();
