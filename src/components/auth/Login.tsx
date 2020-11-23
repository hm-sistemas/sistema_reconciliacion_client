import React, { useState } from "react";
import LoginForm from "./modules/LoginForm";

import AuthService from "../../services/auth/auth.service";
import Spinner from "../elements/Spinner";
import { Alert } from "antd";

import "./auth.css";

function Login(props: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const onFinish = (values: any) => {
    setLoading(true);
    values.device = navigator.userAgent;
    console.log("Success:", values);
    AuthService.login(values.email, values.password, values.device).then(
      (response) => {
        setError(false);
        setLoading(false);
        props.history.push("/");
      },
      (error) => {
        setError(true);
        setMessage("Credenciales incorrectas.");
        setLoading(false);
      }
    );
  };

  return (
    <article className="main-container">
      <div className="login-wrapper">
        <section className="form-wrapper">
          <div className="form-container">
            <div className="form-messages">
              <h2>Sistema de</h2>
            </div>
            {error ? (
              <Alert
                message="Error"
                description={message}
                type="error"
                showIcon
              />
            ) : (
              ""
            )}
            {loading ? <Spinner /> : <LoginForm onFinish={onFinish} />}
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
export default Login;
