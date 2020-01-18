import {useEffect} from 'react';

function Logger({state, dispatch}) {
  useEffect(() => {
    console.log('newstate', state);
    console.log('-------------------------');
  }, [state]);
  return next => action => {
    console.log('-------------------------');

    console.log('prestate', state);
    let result = next(action);
    return result;
  };
}

export default Logger;
