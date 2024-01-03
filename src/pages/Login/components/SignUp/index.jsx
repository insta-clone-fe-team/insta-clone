import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <div className="signup-section">
      <div className="signup-text"> 계정이 없으신가요?</div>
      <div className="signup-button">
        <button onClick={handleSignUpClick}>가입하기</button>
      </div>
    </div>
  );
};

export default SignUp;
