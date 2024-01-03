import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/search_password");
  };
  return (
    <div className="forgot-password">
      <button onClick={handleForgotPasswordClick}>
        비밀번호를 잊으셨나요?
      </button>
    </div>
  );
};

export default ForgotPassword;
