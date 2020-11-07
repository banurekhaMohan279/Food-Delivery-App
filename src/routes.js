import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Location from './components/location.js';
import Restaurants from './components/restaurants.js';

export default function Routes() {
  return(
      <Router>
        <Switch>
          <Route exact path = '/'>
            <App />
          </Route>
          <Route path = '/Location'>
            <Location />
          </Route>
          <Route path = '/Restaurants'>
            <Restaurants />
          </Route>
        </Switch>
      </Router>
  )
}
