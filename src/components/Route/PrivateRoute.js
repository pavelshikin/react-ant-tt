import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCookies } from 'react-cookie'

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useAuth();
  const [cookies] = useCookies('Token')

  return (
    <Route
      {...rest}
      render={({ location }) => 
        isAuth || cookies.Token
        ? children
        : <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
      }
    />
  );
};

export default PrivateRoute;