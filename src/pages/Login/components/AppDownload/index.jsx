import React from "react";
import "./index.css";

const AppDownload = () => {
  return (
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
  );
};

export default AppDownload;
