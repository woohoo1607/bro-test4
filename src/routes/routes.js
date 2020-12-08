import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, TaskPage } from "../pages";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <HomePage {...props} />} />
      <Route exact path="/logs" render={(props) => <HomePage {...props} />} />
      <Route exact path="/charts" render={(props) => <HomePage {...props} />} />
      <Route
        exact
        path="/task/:id"
        render={(props) => <TaskPage {...props} />}
      />
      <NotFoundPage />
    </Switch>
  );
};

export default Routes;
