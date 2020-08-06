const mapNode = require('../CreateAlgorithm/CreateAlgorithm');

class CreateRouteController {
  generateAddNode(routes) {
    const nodeOrigin = routes.map((routeOrigin) => routeOrigin.origin);
    const nodeDestination = routes.map(
      (routeDestination) => routeDestination.destination
    );

    const nodeConcat = nodeOrigin.concat(nodeDestination);

    const newSepareteNode = nodeConcat.filter(
      (a, b) => nodeConcat.indexOf(a) === b
    );

    return newSepareteNode.map((nodeOnly) => mapNode.addNode(nodeOnly));
  }

  generateEdgeNode(routes) {
    return routes.map((route) =>
      mapNode.addEdge(route.origin, route.destination, parseInt(route.cost))
    );
  }
}

module.exports = new CreateRouteController();
