const CreateRouteController = require('./CreateRouteController');
const ReducerManager = require('../../providers/ReducerManager');
const { response } = require('express');

class CreateRoute {
  constructor() {}
  index(event) {
    return ReducerManager.run(
      {
        event: event,
        response: {},
      },
      [createNode, createEdgeNode]
    );
  }
}

function createNode(state) {
  CreateRouteController.generateAddNode(state.event);

  return state;
}

function createEdgeNode(state) {
  CreateRouteController.generateEdgeNode(state.event);

  return response;
}

module.exports = new CreateRoute();
