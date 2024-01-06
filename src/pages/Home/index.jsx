import React from "react";
import SideBar from "../../components/Sidebar/SideBar";
import Poster from "./components/Poster";
import Recommend from "./components/Recommend/Recommend";
import StoryList from "./components/StoryList/StoryList";
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <SideBar></SideBar>
      <div className="home-layout">
        <div className="home-center-area">
          <StoryList></StoryList>
          <Poster></Poster>
        </div>
        <Recommend></Recommend>
      </div>
    </div>
  );
};

export default Home;
