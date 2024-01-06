import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import defualtAvatar from "../../../../assets/defualtAvatar.jpg";

const StoryList = () => {
  const [dataList, setDataList] = useState([]);

  const requestData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1&per_page=10", {
      method: "GET",
    });
    const data = await res.json();
    setDataList(data.data);
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <div className="story-list-container">
      <div className="story-list-wrapper">
        {dataList.map((item) => {
          return (
            <div className="story-single">
              <div className="story-avatar">
                <div className="story-avatar-gap">
                  <img src={item.avatar} className="story-avatar-avatar"></img>
                </div>
              </div>
              <div>{item.first_name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoryList;
