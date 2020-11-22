import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';

import Home from '../views/Home';
import Projects from '../views/Projects';
import Music from '../views/Music';
import Podcasts from '../views/Podcasts';

export default function Routes({ user }) {
  return (
    <Switch>
    <Route
      exact
      path="/"
      component={Home}
    />
    <Route
      exact
      path="/projects"
      component={Projects}
    />
    <Route
      exact
      path="/music"
      component={Music}
    />
     <Route
      exact
      path="/podcasts"
      component={Podcasts}
    />
    {/* <Route component={NotFound} /> */}
    </Switch>
  );
}
