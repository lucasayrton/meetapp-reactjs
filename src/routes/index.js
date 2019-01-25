import React from "react";

import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Cadastrar from "../pages/Cadastrar";
import Preferences from "../pages/Preferences";
import Dashboard from "../pages/Dashboard";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/cadastrar" component={Cadastrar} />
    <Route path="/preferences" component={Preferences} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
