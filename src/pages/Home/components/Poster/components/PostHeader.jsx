import React, { useState, useEffect } from "react";

const PostHeader = ({ username, avatar, createdAt }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date();
      const postedAt = new Date(createdAt);
      const timeDifference = now - postedAt;

      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);

      if (weeks > 0) {
        setTimeAgo(`${weeks}주 전`);
      } else if (days > 0) {
        setTimeAgo(`${days}일 전`);
      } else if (hours > 0) {
        setTimeAgo(`${hours}시간 전`);
      } else if (minutes > 0) {
        setTimeAgo(`${minutes}분 전`);
      } else if (seconds > 0) {
        setTimeAgo(`${seconds}초 전`);
      } else {
        setTimeAgo(`방금 전`);
      }
    };

    // Update time every minute
    const intervalId = setInterval(calculateTimeAgo, 60000);
    calculateTimeAgo(); // Initial calculation

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [createdAt]);

  return (
    <>
      <img src={avatar} className="poster-avatar"></img>
      <div className="poster-name">{username}</div>
      <div className="poster-date">• {timeAgo}</div>
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
