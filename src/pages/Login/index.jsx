import React from "react";
import "./index.css";
import Phone from "./components/Phone";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

const Login = () => {
  return (
    <>
      <div className="main-container">
        <div class="phone-contatiner">
          <Phone />
        </div>
        <div class="login-container">
          <LoginForm />
          <ForgotPassword />
          <SignUp />
        </div>
        <div className="app-container">
          <AppDownload />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default Login;
