const CreateRouteController = require('./CreateRouteController');

class CreateRoute {
  createNode(state) {
    CreateRouteController.generateAddNode(state);

    return state;
  }

  createEdgeNode(state) {
    CreateRouteController.generateEdgeNode(state);

    return state;
  }
}

module.exports = new CreateRoute();
