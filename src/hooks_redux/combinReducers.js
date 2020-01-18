function combinReducers(reducers) {
  return (state = {}, action) => {
    let rootState = {};

    for (let key in reducers) {
      rootState[key] = reducers[key](state[key], action);
    }
    return rootState;
  };
}

export default combinReducers;
