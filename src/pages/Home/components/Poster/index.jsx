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
          <img src={img} alt={username} />
        </div>
        <div className="poster-footer">
          <PostFooter username={username} />
        </div>
      </div>
    </div>
  );
};

export default Poster;
