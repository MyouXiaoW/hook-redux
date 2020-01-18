import React, {createContext, useContext} from 'react';
import CreateStore from '../hooks_redux/createstore';
import applyMiddleWares from '../hooks_redux/applyMiddleWare';
import Logger from '../hooks_redux/redux-logger';
import combinReducers from '../hooks_redux/combinReducers';
const Context = createContext();

const homepage = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  }
};

const count = (state = 10, action) => {
  switch (action.type) {
    case 'A':
      return state - 1;
    default:
      return state;
  }
};

function Provider({children}) {
  const store = CreateStore(combinReducers({homepage, count}), {}, applyMiddleWares([Logger]));
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
function connect() {
  return WrappedComponent => {
    function Connect(props) {
      const {state, dispatch} = useContext(Context);
      return <WrappedComponent {...props} state={state} dispatch={dispatch} />;
    }
    return Connect;
  };
}

export {Provider, connect};
