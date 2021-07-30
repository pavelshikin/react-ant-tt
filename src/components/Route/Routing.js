import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NotesPage from '../../pages/NotesPage';
import LoginPage from '../../pages/LoginPage';


const Routing = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} exact={true} />
      
      <PrivateRoute path="/notes" exact={true}>
        <NotesPage />
      </PrivateRoute>
      
      <PrivateRoute path="/" exact={true}>
        <div className={'container t-center'}>
          <h1>HomePage</h1>
        </div>
      </PrivateRoute>
    </Switch>
  );
};

export default Routing;
