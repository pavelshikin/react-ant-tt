import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;