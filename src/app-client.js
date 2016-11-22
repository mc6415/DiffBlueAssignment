import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './pages/Layout';
import Home from './pages/Home';

const app = document.getElementById(`main`);

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  </MuiThemeProvider>
  , app
)
