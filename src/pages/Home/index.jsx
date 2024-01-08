import React, { useEffect, useState } from "react";
import SideBar from "../../components/Sidebar/SideBar";
import useGetUserProfileByUserName from "../../hooks/useGetUserProfileByUserName";
import Poster from "./components/Poster";
import Recommend from "./components/Recommend/Recommend";
import StoryList from "./components/StoryList/StoryList";
import "./index.css";

const Home = () => {
  const [dogList, setDogList] = useState([]);
  useEffect(() => {
    getDogImg();
  }, []);
  const data = useGetUserProfileByUserName();

  const getDogImg = async () => {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1"
    );
    const dogData = await res.json();
    console.log("dogData", dogData);
    setDogList(dogData);
  };

  return (
    <div className="home-container">
      <SideBar></SideBar>
      <div className="home-layout">
        <div className="home-center-area">
          <StoryList></StoryList>
          {dogList.map((item) => {
            return <Poster avatar={item.url} img={item.url} />;
          })}
        </div>
        <Recommend data={data}></Recommend>
      </div>
    </div>
  );
};

export default Home;
