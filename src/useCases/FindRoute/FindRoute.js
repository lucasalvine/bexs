const CreateDijkstrasAlgorithm = require('../CreateDijkstras/CreateDijkstrasAlgorithm');

class FindRoute {
  findRoute(request) {
    const origin = request.origin;
    const destination = request.destination;

    return CreateDijkstrasAlgorithm.findBestWay(origin, destination);
  }
}

module.exports = new FindRoute();
