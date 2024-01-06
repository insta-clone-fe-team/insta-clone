import React, { useEffect } from "react";
import SideBar from "../../components/Sidebar/SideBar";
import useGetUserProfileByUserName from "../../hooks/useGetUserProfileByUserName";
import Poster from "./components/Poster";
import Recommend from "./components/Recommend/Recommend";
import StoryList from "./components/StoryList/StoryList";
import "./index.css";

const Home = () => {
  const data = useGetUserProfileByUserName();
  return (
    <div className="home-container">
      <SideBar></SideBar>
      <div className="home-layout">
        <div className="home-center-area">
          <StoryList></StoryList>
          <Poster></Poster>
        </div>
        <Recommend data={data}></Recommend>
      </div>
    </div>
  );
};

export default Home;
