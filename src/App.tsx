import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/home/Home";
import BasicLayout from "./layouts/BasicLayout";
import GuestLayout from "./layouts/GuestLayout";

function App() {
  let [user, setUser] = useState(false);

  if (user) {
    return (
      <div className="App">
        <BasicLayout>
          <Switch>
            <Route path="/" component={withRouter(Home)} />
          </Switch>
        </BasicLayout>
      </div>
    );
  } else {
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
  }
}

export default App;
