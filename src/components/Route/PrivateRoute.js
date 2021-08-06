import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useAuth();
  const token = Cookies.get('Authentication');

  useEffect(() => {
    if (!isAuth) return <Redirect push to={'/login'} />;
  }, [isAuth]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth || token ? (
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
