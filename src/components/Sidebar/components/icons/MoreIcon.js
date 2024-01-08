import React, { useEffect, useState } from "react";
import useLogout from "../../../../hooks/useLogout";
import LogoutIcon from "./LogoutIcon";

const MoreIcon = () => {
  const [visible, setVisible] = useState(false);
  const { handleLogout, isLoggingOut } = useLogout();
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === "light" ? "white" : "black";
    document.body.style.color = mode === "light" ? "black" : "white";
    const root = document.documentElement;
    root.style.setProperty(
      "--main-svg-color",
      mode === "light" ? "black" : "white"
    );
  }, [mode]);
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
              top: "-100px",
              left: "0",
              display: "flex",
              flexDirection: "column",
              height: "100px",
              width: "250px",
              borderRadius: "8px",
              backgroundColor: "white",
              boxShadow: "10px 5px 5px  #f3f3f3",
            }}
          >
            <button
              onClick={handleLogout}
              isLoggingOut={isLoggingOut}
              style={{ background: "none", border: "none" }}
            >
              <LogoutIcon></LogoutIcon>
            </button>
            <a>
              <div
                className="menu-single-wrap"
                onClick={toggleMode}
                style={{ paddingLeft: "20px" }}
              >
                <svg
                  aria-label="테마 아이콘"
                  class="x1lliihq x1n2onr6 x5n08af"
                  fill="currentColor"
                  height="18"
                  role="img"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <title>테마 아이콘</title>
                  <path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path>
                </svg>
                모드 전환
              </div>
            </a>
          </div>
        ) : null}
      </div>
    </a>
  );
};

export default MoreIcon;
