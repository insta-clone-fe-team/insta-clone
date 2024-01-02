import React from "react";
import Phone from "./components/Phone";
import LoginForm from "./components/LoginForm";
import "./index.css";

const Login = () => {
  return (
    <div class="login-container">
      <div clsdd="phone-contatiner">
        <Phone></Phone>
      </div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
