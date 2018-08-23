import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Authenticate from './Authenticate';

// Protects Pages from being accessed from users that aren't logged in
const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/user/login',
        }}
      />
    ))
    }
  />
);

export default PrivateRoute;
