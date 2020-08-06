const CreateRouteController = require('./CreateRouteController');

class CreateRoute {
  createNode(state) {
    try {
      CreateRouteController.generateAddNode(state);
    } catch {
      console.log(
        'Cannot possible to create airport. Please, check the input-routes file.'
      );
      return false;
    }

    return state;
  }

  createEdgeNode(state) {
    try {
      CreateRouteController.generateEdgeNode(state);
    } catch {
      console.log(
        'Cannot possible to create airport. Please, check the input-routes file.'
      );
      return false;
    }
  }
}

module.exports = new CreateRoute();
