const mapNode = require('../CreateDijkstras/CreateDijkstrasAlgorithm');

class CreateRouteController {
  generateAddNode(routes) {
    const nodeOrigin = routes.map((routeOrigin) => routeOrigin.ORG);
    const nodeDestination = routes.map(
      (routeDestination) => routeDestination.DES
    );

    const nodeConcat = nodeOrigin.concat(nodeDestination);

    const newSepareteNode = nodeConcat.filter(
      (a, b) => nodeConcat.indexOf(a) === b
    );

    return newSepareteNode.map((nodeOnly) => mapNode.addNode(nodeOnly));
  }

  generateEdgeNode(routes) {
    return routes.map((route) =>
      mapNode.addEdge(route.ORG, route.DES, parseInt(route.COS))
    );
  }
}

module.exports = new CreateRouteController();
