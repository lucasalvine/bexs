const createCsvFile = require('csv-writer').createObjectCsvWriter;

class CreatFile {
  createFile(request, response) {
    const airportsData = request.body;

    const csvWriter = createCsvFile({
      path: 'input-routes.csv',
      header: [
        { id: 'origin', title: 'origin' },
        { id: 'destination', title: 'destination' },
        { id: 'cost', title: 'cost' },
      ],
    });

    try {
      csvWriter.writeRecords(airportsData.airports);
      response.status(201).json({ message: 'Create file successfully' });
    } catch {
      return false;
    }
  }
}

module.exports = new CreatFile();
