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
          <div className="insta-login">
            <button type="button" onClick={handleLogin}>
              로그인
            </button>
          </div>
        </form>
        <div className="bottom">
          <div className="facebook-login">
            <img src="facebook.png"></img>
            <button>Facebook으로 로그인</button>
          </div>
          <div className="forgot-password">
            <button>비밀번호를 잊으셨나요?</button>
          </div>
        </div>
      </div>
      <div className="signup-section">
        <div className="signup-text"> 계정이 없으신가요?</div>
        <div className="signup-button">
          <button>가입하기</button>
        </div>
      </div>
      <div className="app-download">
        <div className="app-text">앱을 다운로드하세요.</div>
        <div className="app-download_img">
          <div className="app-store">
            <img src="appstore.png"></img>
          </div>
          <div className="google-play">
            <img src="googleplay.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
