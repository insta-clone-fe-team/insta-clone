import React, { useState } from "react";
import useLogout from "../../../../hooks/useLogout";
import LogoutIcon from "./LogoutIcon";

const MoreIcon = () => {
  const [visible, setVisible] = useState(false);
  const { handleLogout, isLoggingOut } = useLogout();
  return (
    <a>
      <div
        className="menu-single-wrap"
        onClick={() => setVisible((prev) => !prev)}
      >
        <svg
          aria-label="설정"
          class="x1lliihq x1n2onr6 x5n08af"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>설정</title>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="3"
            x2="21"
            y1="4"
            y2="4"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="3"
            x2="21"
            y1="12"
            y2="12"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="3"
            x2="21"
            y1="20"
            y2="20"
          ></line>
        </svg>
        <span>더 보기</span>
        {visible ? (
          <div
            style={{
              position: "absolute",
              top: "-400px",
              left: "0",
              display: "flex",
              flexDirection: "column",
              width: "250px",
              height: "388px",
              backgroundColor: "yellowgreen",
            }}
          >
            <button
              onClick={handleLogout}
              isLoggingOut={isLoggingOut}
              style={{ background: "none", border: "none" }}
            >
              <LogoutIcon></LogoutIcon>
            </button>
          </div>
        ) : null}
      </div>
    </a>
  );
};

export default MoreIcon;
