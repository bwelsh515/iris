import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Authenticate from './Authenticate';

// Protects Pages from being accessed from users that aren't logged in
const PrivateRoute = ({
  component: Component, isAuthenticated, username, name, ...rest
}) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ? (
      <Component username={username} name={name} {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    ))
    }
  />
);

export default PrivateRoute;
