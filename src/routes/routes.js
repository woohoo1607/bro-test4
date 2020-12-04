import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" render={(props) => <HomePage {...props} />} />
    </Switch>
  );
};

export default Routes;
