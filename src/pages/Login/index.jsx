import React from "react";
import "./index.css";
import Phone from "./components/Phone";
import LoginForm from "./components/LoginForm";
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
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default Login;
