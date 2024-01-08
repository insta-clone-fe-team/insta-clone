import React, { useState } from "react";
import "./index.css";
import PostHeader from "./components/PostHeader";
import PostFooter from "./components/PostFooter";

const Poster = ({ img, username, avatar }) => {
  return (
    <div className="poster-list-container">
      <div className="poster-single-wrap">
        <header className="poster-header">
          <PostHeader username={username} avatar={avatar} />
        </header>
        <div className="poster-banner">
          <img src={img} alt={username} className="poster-banner" />
        </div>
        <div className="poster-footer">
          <PostFooter
            username={username}
            likes={Math.floor(Math.random() * 100)}
          />
        </div>
      </div>
    </div>
  );
};

export default Poster;
