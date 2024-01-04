import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-info">
        <a
          href="https://about.meta.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta
        </a>
        <a
          href="/https://about.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          소개
        </a>
        <a
          href="/https://about.instagram.com/blog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          블로그
        </a>
        <a href="/https://about.instagram.com/about-us/careers">채용 정보</a>
        <a
          href="/https://help.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          도움말
        </a>
        <a
          href="/https://developers.facebook.com/docs/instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
        <a href="/https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">
          개인정보처리방침
        </a>
        <a href="/https://help.instagram.com/581066165581870/">약관</a>
        <a href="/https://www.instagram.com/explore/locations/">위치</a>
        <a href="/https://www.instagram.com/web/lite/">Instagram Lite</a>
        <a
          href="https://www.threads.net/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Threads
        </a>
        <a href="/https://www.facebook.com/help/instagram/261704639352628-contact">
          연락처 업로드 & 비사용자
        </a>
        <a
          href="/https://l.instagram.com/?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-verified%2F&e=AT2p2cpS8oznSzmEkPz41EpsBSle8qfPdSbypcajXCDbBxcX484MWUYRUN8Ir1rCzCjz4vBT3WWCZHBSKuz-4gaDYyHr_KA5&s=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta Verified
        </a>
      </div>
      <div className="footer-bottom">
        <select className="language-selector">
          <option value="korean">한국어</option>
          <option value="english">English</option>
        </select>
        <span>© 2024 Instagram from Meta</span>
      </div>
    </div>
  );
};

export default Footer;
