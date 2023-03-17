import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthServices from './AuthServices'; 

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => AuthServices.getAccessToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRoute;