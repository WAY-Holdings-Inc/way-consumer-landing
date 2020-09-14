import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home'
import Order from './components/Order/Order'
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';
import ScrollToTopRoute from './scrollToTop';
 


const routing = (
  <Router>

    <Switch>
      <ScrollToTopRoute exact path="/" component={Home} />
      <ScrollToTopRoute path="/order" component={Order} />
      <ScrollToTopRoute path="/privacy" component={Privacy} />
      <ScrollToTopRoute path="/terms" component={Terms} />
      <ScrollToTopRoute component={Home} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
