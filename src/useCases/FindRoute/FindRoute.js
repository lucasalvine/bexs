const CreateDijkstrasAlgorithm = require('../CreateAlgorithm/CreateAlgorithm');

class FindRoute {
  findRoute(request, response) {
    const origin = request.origin;
    const destination = request.destination;

    try {
      return CreateDijkstrasAlgorithm.findBestWay(origin, destination);
    } catch (err) {
      if (!response)
        console.log(
          `Cannot find the best routes using this parameters: ${origin} - ${destination}`
        );
      else {
        response.status(401).json({
          message: `Cannot find the best routes using this parameters: ${origin} - ${destination}`,
        });
      }
    }
  }
}

module.exports = new FindRoute();
