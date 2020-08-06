/* eslint-disable no-undef */
const CreateFile = require('../../../src/useCases/CreateFile/CreateFile');

describe('Create File', () => {
  it('after receive data json, create a csv file', () => {
    const data = {
      body: {
        airports: [
          { origin: 'GRU', destination: 'BRC', cost: '10' },
          { origin: 'BRC', destination: 'SCL', cost: '5' },
        ],
      },
    };

    CreateFile.createFile(data);

    expect(201);
  });

  it('after receive wrong data json, create a csv file', () => {
    const data = {
      body: {
        airports: [
          { err: 'GRU', destination: 'BRC', cost: '10' },
          { err: 'BRC', destination: 'SCL', cost: '5' },
        ],
      },
    };

    CreateFile.createFile(data);

    expect(401);
  });
});
