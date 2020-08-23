import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
      <Route
        {...rest}
        render={props => {
          if (true) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/api/login" />;
          }
        }}
      />
    );
  };
  
  export default PrivateRoute;