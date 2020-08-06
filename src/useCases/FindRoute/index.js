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

  try {
    const findBetterWay = FindRoute.findRoute(request.query, response);
    if (!response) return console.log(`? Best route: `, findBetterWay);
    return response.status(201).json({ best_route: findBetterWay });
  } catch {
    if (!response)
      return console.log(
        `? Cannot find the best route to: ${request.query.origin} and ${request.query.destination}`
      );
    else
      return response
        .status(401)
        .json({ message: 'Cannot find the best route' });
  }
}

module.exports = new Index();
