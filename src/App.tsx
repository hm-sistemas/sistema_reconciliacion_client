import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/home/Home";
import Incomes from "./components/incomes/Incomes";
import PrivateRoute from "./components/PrivateRoute";
import BasicLayout from "./layouts/BasicLayout";

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <Switch>
          <Route exact path="/login" component={withRouter(Login)}></Route>
          <Route exact path="/register" component={withRouter(SignUp)}></Route>
          <PrivateRoute path="/ingresos" component={withRouter(Incomes)} />
          <PrivateRoute path="/" component={withRouter(Home)} />
          <Redirect exact from="/logout" to="/login" />
        </Switch>
      </BasicLayout>
    </div>
  );
}

export default App;
