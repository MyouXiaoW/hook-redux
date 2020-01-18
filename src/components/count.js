import React from 'react';
import {connect} from '../hooks_redux/provider';

function Count(props) {
  return (
    <div className="container">
      <h1 className="text-center mt-5">{props.state.homepage}</h1>
    </div>
  );
}

export default connect()(Count);
