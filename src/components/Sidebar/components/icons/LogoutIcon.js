import React from "react";
import logout from "../../../../assets/logout.png";

const LogoutIcon = () => {
  return (
    <a>
      <div className="menu-single-wrap">
        <img src={logout} style={{ width: "24px", height: "24px" }}></img>
        <span className="sidebar-logout-text">로그아웃</span>
      </div>
    </a>
  );
};

export default LogoutIcon;
