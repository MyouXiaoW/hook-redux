import React from 'react';
import {connect} from '../hooks_redux/provider';
/**
 store.subscribe(() => this.setState({count:1})))
 */

function HomePage(props) {
  return (
    <div className="container">
      <h1 className="text-center mt-5">{props.state.homepage}</h1>
      <h1 className="text-center mt-5">{props.state.count}</h1>
      <p className="text-center">
        <button
          onClick={() => {
            props.dispatch({type: 'ADD'});
          }}
          className="btn btn-primary mr-2"
        >
          Increase
        </button>
        <button
          onClick={() => {
            props.dispatch({type: 'A'});
          }}
          className="btn btn-danger my-2"
        >
          Decrease
        </button>
      </p>
      <p className="text-center">
        <button
          className="btn btn-danger my-2"
          onClick={() => {
            props.history.push('/count');
          }}
        >
          跳转下一页
        </button>
      </p>
    </div>
  );
}

export default connect()(HomePage);
