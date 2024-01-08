import React, { useState } from "react";

const PostHeader = ({ username, avatar }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };
  return (
    <>
      <img src={avatar} className="poster-avatar"></img>
      <div className="poster-name">{username}</div>
      <div className="poster-date">• 1w ago</div>
      <div className="poster-follow">
        <button
          style={{ color: isButtonClicked ? "#a8a8a8" : "#0095f6" }}
          onClick={handleButtonClick}
        >
          팔로우
        </button>
      </div>
    </>
  );
};

export default PostHeader;
