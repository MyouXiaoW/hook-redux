function applyMiddleWare(middlewares) {
  return CreateStore => (reducers, preloadedState, enhancer) => {
    const store = CreateStore(reducers, preloadedState);
    const middlewaresAPI = {
      state: store.state,
      dispatch: action => store.dispatch(action)
    };

    // console.log(store.state);

    let chain = [];

    chain = middlewares.map(middlerware => {
      return middlerware(middlewaresAPI);
    });

    let dispatch = compose(...chain)(store.dispatch);

    return {...store, dispatch};
  };
}

function compose(...funcs) {
  //   if (funcs.length === 1) {
  //     return funcs[0];
  //   }

  let last = funcs[funcs.length - 1];
  return args => {
    return funcs.reduceRight(
      (composed, f, i) => {
        if (i === 0) {
          return last(args);
        }
        return f(composed);
      },
      () => {}
    );
  };
}

export default applyMiddleWare;
