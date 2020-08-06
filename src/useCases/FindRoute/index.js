const FindRoute = require('./FindRoute');
const fs = require('fs');
const csv = require('csv-parser');
const CreateRoute = require('../CreateRoute/CreateRoute');

class Index {
  index(request, response) {
    const results = [];
    fs.createReadStream('./input-routes.csv')
      .pipe(csv())
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        createRoute(results, request, response);
      });
  }
}

function createRoute(resultFile, request, response) {
  CreateRoute.createNode(resultFile);
  CreateRoute.createEdgeNode(resultFile);

  const findBetterWay = FindRoute.findRoute(request.query, response);

  if (!response) console.log(`? Best route: `, findBetterWay);

  response.status(201).json({ best_route: findBetterWay });
}

module.exports = new Index();
