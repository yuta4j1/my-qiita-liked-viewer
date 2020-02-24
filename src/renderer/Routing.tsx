import * as React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter
} from 'react-router-dom'
import App from '@/components/App'
import LoginWrapper from '@/components/Login/LoginWrapper'

const Routing = (
  <Router>
    <Switch>
      <Route path="/view" component={App} />
      <Route path="/" component={withRouter(LoginWrapper)} />
    </Switch>
  </Router>
)

export default Routing
