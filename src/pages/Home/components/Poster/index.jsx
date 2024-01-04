import React from "react";
import "./index.css";
import defaultAvatar from "../../../../assets/defualtAvatar.jpg";
import LikeIcon from "./components/Like";
import Comment from "./components/Comment";
import Share from "./components/Share";
import Save from "./components/Save";

const Poster = () => {
  return (
    <div className="poster-list-container">
      <div className="poster-single-wrap">
        <header className="poster-header">
          <img src={defaultAvatar} className="poster-avatar"></img>
          <div className="poster-name">hahaha</div>
          <div className="poster-date">1day ago</div>
          <div className="poster-more">...</div>
        </header>
        <div className="poster-banner"></div>
        <div className="poster-actions">
          <LikeIcon></LikeIcon>
          <Comment></Comment>
          <Share></Share>
          <Save></Save>
        </div>
        <div>좋아요 5개</div>
        <div>hahaha ajkdjflsjflsjdf</div>
      </div>
    </div>
  );
};

export default Poster;
