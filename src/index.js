import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home'
import Order from './components/Order/Order'

 

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/order" component={Order}/>
      </Switch>
    </div>
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