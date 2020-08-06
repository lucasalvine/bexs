const CreateRoute = require('../../../src/useCases/CreateRoute/CreateRoute');

/* eslint-disable no-undef */
describe('Create Route', () => {
  it('after read the file, create node', () => {
    const node = ['ABN', 'ASD'];

    const result = CreateRoute.createNode(node);

    expect(result).toStrictEqual(['ABN', 'ASD']);
  });

  it('cannot create node', () => {
    const node_2 = {};

    const result_2 = CreateRoute.createNode(node_2);

    expect(result_2).toBe(false);
  });

  it('create edge node', () => {
    const node_3 = [{ origin: 'ABN', destination: 'ABC', cost: '10' }];

    CreateRoute.createNode(node_3);
    const result_3 = CreateRoute.createEdgeNode(node_3);

    expect(result_3).toBeUndefined();
  });

  it('cannot create edge node', () => {
    const node_4 = [{}];

    const result_4 = CreateRoute.createEdgeNode(node_4);

    expect(result_4).toBeUndefined();
  });
});
