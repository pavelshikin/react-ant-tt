import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/main.scss';
import Layout from './components/Layout';
import Routing from './components/Route/Routing';
import Loader from './components/Loader';
import Modal from './components/Modal';

const App = () => {
  const loading = useSelector(state => state.app.loading);
  const error = useSelector(state => state.app.error);
  console.log(error);

  return (
    <Router>
      <Layout>
        {loading ? <Loader /> : null}
        {error ? <Modal text={error} /> : null}
        <Routing />
      </Layout>
    </Router>
  );
};

export default App;
