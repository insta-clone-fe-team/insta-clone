import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AuthForm = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });

  // 유효성 검사
  const isValid = inputs.email.includes("@") && inputs.password.length >= 5;

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("모든 빈칸을 채워주세요.");
      return;
    }
    navigate("/");
  };

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
              <input
                id="email"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
              {!isLogin ? (
                <input
                  id="name"
                  type="text"
                  placeholder="성명"
                  value={inputs.name}
                  onChange={(e) =>
                    setInputs({ ...inputs, name: e.target.value })
                  }
                />
              ) : null}
              {!isLogin ? (
                <input
                  id="username"
                  type="text"
                  placeholder="사용자 이름"
                  value={inputs.usernamename}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              ) : null}
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div className="insta-login">
              <button
                type="button"
                disabled={!isLogin}
                onClick={handleAuth}
                style={{
                  backgroundColor: isValid ? "#0095f6" : "#65b5fa",
                }}
              >
                {isLogin ? "로그인" : "가입하기"}
              </button>
            </div>
          </form>
          <div className="bottom">
            <div className="or-section">
              <span>또는</span>
            </div>
            <div className="facebook-login">
              <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dko_KR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522ngygwzdwcfi936s18w4vs7j8ijqrm17st6mdunfxrew0qnox%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd92a4dc9-c247-432a-b1f7-f835953e1046%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522ngygwzdwcfi936s18w4vs7j8ijqrm17st6mdunfxrew0qnox%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <span>
                    <img src="facebook.png"></img>
                    Facebook으로 로그인
                  </span>
                </button>
              </a>
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
