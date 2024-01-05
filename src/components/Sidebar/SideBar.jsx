import React from "react";
import AddIcon from "./components/icons/AddIcon";
import ExploreIcon from "./components/icons/ExploreIcon";
import HomeIcon from "./components/icons/HomeIcon";
import InsIcon from "./components/icons/InsIcon";
import InsTextIcon from "./components/icons/InsTextIcon";
import MessengerIcon from "./components/icons/MessengerIcon";
import MoreIcon from "./components/icons/MoreIcon";
import NoticeIcon from "./components/icons/NoticeIcon";
import ReelsIcon from "./components/icons/ReelsIcon";
import SearchIcon from "./components/icons/SearchIcon";
import ThreadsIcon from "./components/icons/ThreadsIcon";
import defualtAvatar from "../../assets/defualtAvatar.jpg";
import "./index.css";
import Profile from "./components/icons/Profile";
import LogoutIcon from "./components/icons/LogoutIcon";
import useLogout from "../../hooks/useLogout";

const SideBar = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  return (
    <div className="sidebar-wrapper">
      {/* <InsIcon></InsIcon> */}
      <InsTextIcon></InsTextIcon>
      <div className="main-menu">
        <HomeIcon style={{ fill: "currentColor" }}></HomeIcon>
        <SearchIcon></SearchIcon>
        <ExploreIcon></ExploreIcon>
        <ReelsIcon></ReelsIcon>
        <MessengerIcon></MessengerIcon>
        <NoticeIcon></NoticeIcon>
        <AddIcon></AddIcon>
        <Profile></Profile>
      </div>
      <ThreadsIcon></ThreadsIcon>
      <MoreIcon></MoreIcon>
      <div className="logout-menu">
        <button
          onClick={handleLogout}
          isLoggingOut={isLoggingOut}
          style={{ background: "none", border: "none" }}
        >
          <LogoutIcon></LogoutIcon>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
