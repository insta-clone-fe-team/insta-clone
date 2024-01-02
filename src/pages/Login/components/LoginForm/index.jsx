import React, { useState } from "react";
import "./index.css";

const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <div className="login-container">
      <div className="login-main">
        <div className="login-title">Instagram</div>
        <form>
          <div className="login-form">
            <input
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input id="password" type="password" placeholder="비밀번호" />
          </div>

          <button type="button" onClick={handleLogin}>
            로그인
          </button>
        </form>
        <div className="bottom">
          <div>---------- 또는 ----------</div>
          <button>Facebook으로 로그인</button>
          <div>비밀번호를 잊으셨나요?</div>
        </div>
      </div>
      <div className="login-bottom">
        계정이 없으신가요?
        <button>가입하기</button>
      </div>
    </div>
  );
};

export default LoginForm;
