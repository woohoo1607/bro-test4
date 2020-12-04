import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/routes';
import store from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>
);

export default App;
