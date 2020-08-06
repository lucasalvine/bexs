const CreateRoute = require('../../../src/useCases/CreateRoute/CreateRoute');
const FindRoute = require('../../../src/useCases/FindRoute/FindRoute');

/* eslint-disable no-undef */
describe('Find Route', () => {
  it('after create node and edge, find the best route', () => {
    const data = [
      { origin: 'GRU', destination: 'BRC', cost: '10' },
      { origin: 'BRC', destination: 'SCL', cost: '5' },
      { origin: 'GRU', destination: 'CDG', cost: '75' },
      { origin: 'GRU', destination: 'SCL', cost: '20' },
      { origin: 'GRU', destination: 'ORL', cost: '56' },
      { origin: 'ORL', destination: 'CDG', cost: '5' },
      { origin: 'SCL', destination: 'ORL', cost: '20' },
    ];

    CreateRoute.createNode(data);
    CreateRoute.createEdgeNode(data);

    const query = { origin: 'GRU', destination: 'CDG' };
    const result = FindRoute.findRoute(query);

    expect(result).toStrictEqual('GRU,BRC,SCL,ORL,CDG and cost is 40');
  });

  /* it('after create node and edge, cannot be possible to find the best route', () => {
    const data_2 = [
      { origin: 'GRU', destination: 'BRC', cost: '10' },
      { origin: 'BRC', destination: 'SCL', cost: '5' },
    ];

    CreateRoute.createNode(data_2);
    CreateRoute.createEdgeNode(data_2);

    const query_2 = { origin: 'GRU', destination: 'AAA' };
    const result_2 = FindRoute.findRoute(query_2, true);

    console.log(result_2);
  }); */
});
