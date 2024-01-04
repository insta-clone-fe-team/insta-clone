import React from "react";
import "./index.css";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";

const Login = () => {
  return (
    <>
      <div className="main-container">
        <AuthForm />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default Login;
