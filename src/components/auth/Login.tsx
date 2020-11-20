import React, { useState } from "react";
import LoginForm from "./modules/LoginForm";

import { connect } from "react-redux";
import { login } from "../../actions/auth";
import Spinner from "../elements/Spinner";

import "./auth.css";

function Login() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: []) => {
    setLoading(true);
    console.log("Success:", values);
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <article className="main-container">
        <div className="login-wrapper">
          <section className="form-wrapper">
            <div className="form-container">
              <div className="form-messages">
                <h2>Sistema de</h2>
              </div>
              <LoginForm onFinish={onFinish} />
            </div>
          </section>
          <section className="image-wrapper">
            <div className="image-message">
              <div className="image-hr-container">
                <hr className="image-hr"></hr>
              </div>

              <div className="image-text"></div>
            </div>
          </section>
        </div>
      </article>
    );
  }
}
export default Login;
