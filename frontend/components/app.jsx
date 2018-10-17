import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute
 } from '../util/route_util';

import SignupContainer from './session/signup_container';
import HomeContainer from './home/home_container';
import LoginContainer from './session/login_container';

const App = () => (
  <div>
    <header>
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
)

export default App
