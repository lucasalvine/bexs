const CreateDijkstrasAlgorithm = require('../CreateDijkstras/CreateDijkstrasAlgorithm');

class FindRoute {
  findRoute(request, response) {
    const { origin, destination } = request.query;

    const bestWay = CreateDijkstrasAlgorithm.findPathWithDijkstra(
      origin,
      destination
    );

    response.status(201).json({ ...bestWay });
  }
}

module.exports = new FindRoute();
