import React, { useState } from "react";
import LoginForm from "./modules/LoginForm";

import { connect } from "react-redux";
import { login } from "../../actions/auth";

function Login() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: []) => {
    console.log("Success:", values);
  };
  return <LoginForm onFinish={onFinish} />;
}
export default Login;
