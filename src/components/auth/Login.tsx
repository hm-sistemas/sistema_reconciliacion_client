import React, { useState } from "react";
import LoginForm from "./modules/LoginForm";

import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Spin } from "antd";

function Login() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: []) => {
    setLoading(true);
    console.log("Success:", values);
  };
  if (loading) {
    return <Spin />;
  } else {
    return <LoginForm onFinish={onFinish} />;
  }
}
export default Login;
