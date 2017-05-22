import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Releases from './Releases';
import Merch from './Merch';
import Videos from './Videos';

export default (
  <Route path="/" component={NavigationBar}>
    <IndexRoute
      component={Home}
    />
    <Route
      path="releases"
      component={Releases}
    />
    <Route
      path="merch"
      component={Merch}
    />
    <Route
      path="videos"
      component={Videos}
    />
  </Route>
);
