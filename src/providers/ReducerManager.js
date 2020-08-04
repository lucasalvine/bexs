module.exports = {
  async run(state, reducers) {

    for (const reducer of reducers) {
      console.log(`call ${reducer.name}`);
      state = await reducer(state);
    }

    return state.response;
  },
};
