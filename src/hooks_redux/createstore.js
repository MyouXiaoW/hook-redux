import {useReducer} from 'react';

function CreateStore(reducers, preload, enhancer) {
  const [state, dispatch] = useReducer(reducers, preload);
  if (enhancer) {
    return enhancer(CreateStore)(reducers, preload);
  }
  return {state, dispatch};
}

export default CreateStore;
