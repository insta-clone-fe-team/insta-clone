import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 유효성 검사
  const isValid = username.includes("@") && password.length >= 5;

  const goToHome = () => {
    if (username.trim() == "") {
      setError(
        "입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요."
      );
    } else if (password.trim() == "") {
      setError("잘못된 비밀번호입니다. 다시 확인하세요.");
    } else {
      setError(""); // error 메시지 지우기
      navigate("/");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-main">
          <div className="login-title">Instagram</div>
          <form>
            <div className="login-form">
              <input
                id="id"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="insta-login">
              <button
                type="button"
                disabled={!isValid}
                onClick={goToHome}
                style={{
                  backgroundColor: isValid ? "#0095f6" : "#65b5fa",
                }}
              >
                로그인
              </button>
            </div>
          </form>
          <div className="bottom">
            <div className="facebook-login">
              <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dko_KR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522ngygwzdwcfi936s18w4vs7j8ijqrm17st6mdunfxrew0qnox%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd92a4dc9-c247-432a-b1f7-f835953e1046%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522ngygwzdwcfi936s18w4vs7j8ijqrm17st6mdunfxrew0qnox%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0">
                <img src="facebook.png"></img>
                <button>Facebook으로 로그인</button>
              </a>
            </div>
            <div className="error-msg">{error}</div>
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
              <a href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo">
                <img src="appstore.png"></img>
              </a>
            </div>
            <div className="google-play">
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DE488430E-8A12-4C09-9CA3-0FC6603A8844%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1">
                <img src="googleplay.png"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
