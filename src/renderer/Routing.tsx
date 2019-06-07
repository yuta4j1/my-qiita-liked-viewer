import * as React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from '~/components/App';
import Login from '~/components/Login';

const Routing = (
  <Router>
    <Switch>
      <Route path="/view" component={App} />
      <Route path="/" component={Login} />
    </Switch>
  </Router>
);

export default Routing;
