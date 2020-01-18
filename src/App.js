import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/homePage';
import Count from './components/count';
// import reactRedux from './hooks_redux';
import {Provider} from './hooks_redux/provider';

// console.log(Provider);
function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/count" component={Count} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
