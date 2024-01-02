import React from "react";
import Phone from "./components/Phone";
import LoginForm from "./components/LoginForm";
import "./index.css";

const Login = () => {
  return (
    <div className="main-container">
      <div class="phone-contatiner">
        <Phone></Phone>
      </div>
      <div class="login-container">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
