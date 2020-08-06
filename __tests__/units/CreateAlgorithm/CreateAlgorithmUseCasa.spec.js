/* eslint-disable no-undef */
const CreateAlgorithm = require('../../../src/useCases/CreateAlgorithm/CreateAlgorithm');

describe('Create Algorithm', () => {
  it('create node', () => {
    const data = [
      CreateAlgorithm.addNode('GRU'),
      CreateAlgorithm.addNode('BRC'),
      CreateAlgorithm.addNode('ORL'),
      CreateAlgorithm.addNode('SCL'),
      CreateAlgorithm.addNode('CDG'),
    ];

    expect(data[0]).toBeUndefined();
    expect(data[1]).toBeUndefined();
    expect(data[2]).toBeUndefined();
    expect(data[3]).toBeUndefined();
    expect(data[4]).toBeUndefined();
  });
  it('create edge', () => {
    const data_2 = [
      CreateAlgorithm.addEdge('GRU', 'BRC', 10),
      CreateAlgorithm.addEdge('BRC', 'SCL', 5),
      CreateAlgorithm.addEdge('GRU', 'CDG', 75),
      CreateAlgorithm.addEdge('GRU', 'SCL', 20),
      CreateAlgorithm.addEdge('GRU', 'ORL', 56),
      CreateAlgorithm.addEdge('ORL', 'CDG', 5),
      CreateAlgorithm.addEdge('SCL', 'ORL', 20),
    ];

    expect(data_2[0]).toBeUndefined();
  });

  it('after create node and edge, find the best route', () => {
    const result = CreateAlgorithm.findBestWay('GRU', 'CDG');

    expect(result).toEqual('GRU,BRC,SCL,ORL,CDG and cost is 40');
  });
});
