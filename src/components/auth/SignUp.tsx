import React from "react";
import SignUpForm from "./modules/SignUpForm";

import { connect } from "react-redux";
import { register } from "../../actions/auth";

function SignUp() {
  const onFinish = (values: []) => {
    console.log("Success:", values);
  };
  return <SignUpForm onFinish={() => onFinish} />;
}
export default SignUp;
