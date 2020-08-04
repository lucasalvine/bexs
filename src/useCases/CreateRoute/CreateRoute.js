/* const fs = require('fs');
const csv = require('csv-parser');
 */
const CreateRouteController = require('./CreateRouteController');
const ReducerManager = require('../../providers/ReducerManager');
//const CreateDijkstrasAlgorithm = require('../CreateDijkstras/CreateDijkstrasAlgorithm');
const { response } = require('express');

module.exports = {
  file(event) {
    return ReducerManager.run(
      {
        file: event,
        readFileNode: [],
      },
      [
        // readFile,
        createNode,
        createEdgeNode,
        //findPathWithDijkstra,
      ]
    );
  },
};

/* function readFile(state) {
  const { readFileNode } = state;
  const dataNodes = [];
  fs.createReadStream(state.file)
    .pipe(csv(['ORG', 'DES', 'COS']))
    .on('data', (data) => {
      dataNodes.push(data);
    });

  return state;
}
 */
function createNode(state) {
  CreateRouteController.generateAddNode(state.file);

  return state;
}

function createEdgeNode(state) {
  CreateRouteController.generateEdgeNode(state.file);

  return response;
}

/* function findPathWithDijkstra() {
  CreateDijkstrasAlgorithm.findPathWithDijkstra('GRU', 'CDG');

  return response;
} */
