import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const [user, setUser] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    return (
      <Route
        {...rest}
        render={props => {
          if (user.credentials) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/api/login" />;
          }
        }}
      />
    );
  };
  
  export default PrivateRoute;