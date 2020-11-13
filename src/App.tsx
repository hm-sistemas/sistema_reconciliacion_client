import React from "react";
import { BrowserRouter as Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import BasicLayout from "./layouts/BasicLayout";

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <Switch>
          <Route exact path="/login" component={withRouter(Login)}></Route>
          <Route exact path="/register" component={withRouter(SignUp)}></Route>
        </Switch>
      </BasicLayout>
    </div>
  );
}

export default App;
