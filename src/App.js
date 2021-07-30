import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/globals.scss';
import Layout from './components/Layout';
import Routing from './components/Route/Routing';
import Loader from './components/Loader';

const App = () => {
  const loading = useSelector(state => state.app.loading);

  return (
    <Router>
      <Layout>
        {loading ? <Loader /> : null}
        <Routing />
      </Layout>
    </Router>
  );
};

export default App;
