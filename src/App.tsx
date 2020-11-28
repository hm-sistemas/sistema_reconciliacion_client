import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/home/Home";
import PrivateRoute from "./components/PrivateRoute";
import BasicLayout from "./layouts/BasicLayout";

function App() {
  /* if (user) { */
  return (
    <div className="App">
      <BasicLayout>
        <Switch>
          <Route exact path="/login" component={withRouter(Login)}></Route>
          <Route exact path="/register" component={withRouter(SignUp)}></Route>
          <PrivateRoute path="/" component={withRouter(Home)} />
        </Switch>
      </BasicLayout>
    </div>
  );
  /* } else {
    return (
      <div className="App">
        <GuestLayout>
          <Switch>
            <Route exact path="/login" component={withRouter(Login)}></Route>
            <Route
              exact
              path="/register"
              component={withRouter(SignUp)}
            ></Route>
          </Switch>
        </GuestLayout>
      </div>
    );
  } */
}

export default App;
