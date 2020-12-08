import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import store from "./store";
import Routes from "./routes/routes";
import { ModalContainer } from "./containers";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
      <ModalContainer />
    </Router>
  </Provider>
);

export default App;
