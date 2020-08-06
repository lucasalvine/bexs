const CreateAlgorithm = require('../CreateAlgorithm/CreateAlgorithm');

class FindRoute {
  findRoute(request) {
    const origin = request.origin;
    const destination = request.destination;

    return CreateAlgorithm.findBestWay(origin, destination);
  }
}

module.exports = new FindRoute();
