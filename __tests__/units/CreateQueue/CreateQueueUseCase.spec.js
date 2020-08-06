/* eslint-disable no-undef */
const CreatePriorityQueue = require('../../../src/useCases/CreateQueue/CreatePriorityQueue');

describe('Create Queue', () => {
  it('after create node and edge, its necessary to create a priority queue', () => {
    const [node_1] = ['BRL'];

    const enqueue = CreatePriorityQueue.enqueue([node_1], 0);

    expect(enqueue).toBeUndefined();
  });

  it('make dequeue', () => {
    const step_1 = CreatePriorityQueue.dequeue();
    const step_2 = step_1[0];

    expect(step_2).toBe('BRL');
  });

  it('test empty collection', () => {
    const [node_2] = [];

    const result = CreatePriorityQueue.enqueue([node_2]);

    expect(result).toBeUndefined();
  });

  it('received elements and return queue', () => {
    const [node_3] = ['URL'];

    CreatePriorityQueue.enqueue([node_3], 0);

    const dequeue = CreatePriorityQueue.dequeue();
    const currentNode = dequeue[0];

    expect(currentNode).toBeUndefined();
  });
});
