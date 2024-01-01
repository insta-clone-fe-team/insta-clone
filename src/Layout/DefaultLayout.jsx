import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";

const DefaultLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div style={{ display: "flex" }}>
      {/* 로그인 화면은 사이드 바를 안보여줌 */}
      {pathname !== "/login" ? <SideBar></SideBar> : null}
      <div style={{ display: "flex", flex: 1 }}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
