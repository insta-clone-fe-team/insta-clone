import React, { useState } from "react";
import "./index.css";
import Login from "./Login";
import Signup from "./Signup";
import FacebookAuth from "./FacebookAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div class="phone-contatiner">
        {isLogin ? (
          <div className="iphone-img">
            <img src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW" />
          </div>
        ) : null}
      </div>
      <div className="login-container">
        <div className="login-main">
          <div className="login-logo">
            <img src="logo.png"></img>
          </div>
          <form>
            <div className="login-form">
              <div className="insta-login">
                {isLogin ? <Login /> : <Signup />}
              </div>
            </div>
          </form>
          <div className="bottom">
            <div className="or-section">
              <span>또는</span>
            </div>
            <div className="facebook-login">
              <FacebookAuth />
            </div>
            <div className="forgot-password">
              {isLogin && (
                <div className="forgot-password">
                  <button>비밀번호를 잊으셨나요?</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="signup-section">
          <div className="signup-text">
            {isLogin ? "계정이 없으신가요?" : "계정이 있으신가요?"}
          </div>
          <div className="signup-button">
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "가입하기" : "로그인"}
            </button>
          </div>
        </div>
        <div className="app-download">
          <div className="app-text">앱을 다운로드하세요.</div>
          <div className="app-download_img">
            <div className="app-store">
              <a
                href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="appstore.png"></img>
              </a>
            </div>
            <div className="google-play">
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DE488430E-8A12-4C09-9CA3-0FC6603A8844%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="googleplay.png"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
